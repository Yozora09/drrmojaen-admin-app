import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from 'src/app/services/authenticate/authentication.service';
import { AdminInformation } from 'src/app/services/authenticate/admin.model';

import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

// camera & firebase storage
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-registration3',
  templateUrl: './registration3.page.html',
  styleUrls: ['./registration3.page.scss'],
})
export class Registration3Page implements OnInit {

  passwordType: string = 'password';
  passwordShown: boolean = false;

  defaultImg = 'assets/template/template.png';
  imageHandler: any;
  newImg: any;

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient,
    private storage: AngularFireStorage,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  // show password function
  showPass() {
    if(this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    }
    else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  // open camera prompt
  async takePicture() {
    
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      correctOrientation: true
    });

    // store image data to variable in DataUrl format
    this.imageHandler = image.dataUrl;
    this.newImg = this.imageHandler;
  }

  // form submit && image upload
  async formSubmit(form: NgForm) {

    const creds = form.value;
    this.authService.setAdminCreds(creds);

    const {firstName, middleName, lastName, sex, contactNo, birthDate} = this.authService.getPersonalInfo();
    const {houseNo, street, barangay} = this.authService.getAddress();
    const {email, password} = this.authService.getAdminCreds();

    // loading controller
    const loading = await this.loadingCtrl.create({
      message: 'Registering New Admin',
      spinner: 'crescent',
      cssClass: 'customLoading',
    });

    // verification alert
    const verifAlert = await this.alertCtrl.create({
      header: 'Registration Complete!',
        message: 'Your registration has been completed. Navigate to Signup Page',
        buttons: [
          {
            text: 'Ok',
            cssClass: 'ok',
            handler: () => {
              this.router.navigateByUrl('/login');
            }
          }
        ],
        cssClass: 'alert'
    })

    // validate if image is captured/selected
    if (!this.imageHandler) {
      const alert = await this.alertCtrl.create({
        header: 'No Image Provided!',
        message: 'Please provide an image file to proceed.',
        buttons: [
          {
            text: 'Ok',
            cssClass: 'ok'
          }
        ],
        cssClass: 'customAlert'
      });

      await alert.present();
      console.log('No image provided.');
      return;
    }

    const base64Data = this.imageHandler.split(',')[1];

    // limit image filesize to 4mb
    const maxSizeBytes = 4 * 1024 * 1024;
    if (base64Data?.length > maxSizeBytes) {
      const alert = await this.alertCtrl.create({
        header: 'Filesize Exceeded!',
        message: 'The image file you provided exceeded the limit of 4MB.',
        buttons: [
          {
            text: 'Ok',
            cssClass: 'ok'
          }
        ],
        cssClass: 'customAlert'
      });
      await alert.present();
      return;
    }

    try {

      // firebase auth signup
      this.authService.signUp(email, password).subscribe( async (response) => {
        loading.present();

        const fileName = "admin-" + Math.random() * 1000 + Math.random() * 1000;
        
        // firebase storage upload image
        const upload = this.storage.ref(`images/adminImages/${fileName}/${fileName}.jpg`);
        const uploadSuccess = await upload.putString(base64Data, 'base64', { contentType: 'image/jpeg' });

        const adminId = response.localId
        const imgId = fileName
        

        // fetch image of current user and store url to database
        const filepath = `images/adminImages/${fileName}/${fileName}.jpg`
        const ref = this.storage.ref(filepath);

        ref.getDownloadURL().subscribe(async (url) => {
          const imgUrl = url;

          const addNewUser = new AdminInformation(
            firstName,
            middleName,
            lastName,
            sex,
            contactNo,
            birthDate,
            houseNo,
            street,
            barangay,
            email,
            adminId,
            imgUrl,
            imgId
            )

            // if upload is successful registration will proceed
          if (uploadSuccess.state === 'success') {
            console.log('Success')
            
            // store input values to realtime database
            this.http.post('https://drrmojaen-admin-d5ac8-default-rtdb.firebaseio.com/admins.json', 
            addNewUser).subscribe();

            // loading duration
            setTimeout(() => {
              this.loadingCtrl.dismiss();

              form.onReset();

              verifAlert.present();
            }, 1500)
          }

          else {
            console.log("Can't register!");

            const alert = this.alertCtrl.create({
              header: "Registration Error!",
              message: "Registration can't be processed right now. Please check your internet connection.",
              buttons: [
                {
                  text: 'Ok',
                  cssClass: 'ok'
                }
              ],
              cssClass: 'customAlert'
            });

            (await alert).present();
          }
        });
      },

        // handling error with alerts
        async (error: {error: {error: {message: any} } }) => {
          this.authService.login(email, password);

          const {message} = error.error.error;
          if (message === 'EMAIL_EXISTS') {
            // email not found alert
            const alert = await this.alertCtrl.create({
              header: 'EMAIL EXISTS!',
              message: 'The Email Address you provided is already in use by another account.',
              buttons: [
                {
                  text: 'Ok',
                  cssClass: 'ok'
                }
              ],
              cssClass: 'customAlert'
            });
            await alert.present();
          }
          else if (message === 'TOO_MANY-ATTEMPTS_TRY_LATER') {
            // too many attempts alert
            const alert = await this.alertCtrl.create({
              header: 'TOO MANY ATTEMPTS!',
              message: 'We have blocked all requests from this device due to unusual activity.',
              buttons: [
                {
                  text: 'Ok',
                  cssClass: 'ok'
                }
              ],
              cssClass: 'customAlert'
            });
            await alert.present();
          }
        }
      )
    } 
    
    // prompt user with alert if service unavailable
    catch (error) {
      console.log("Can't upload image");

      const alert = await this.alertCtrl.create({
        header: "Can't upload image as of now!",
        message: "Uploading image can't be processed right now.",
        buttons: [
          {
            text: 'Ok',
            cssClass: 'ok'
          }
        ],
        cssClass: 'customAlert'
      });

      await alert.present();
    }
  }

  ngOnInit() {
  }

}
