import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService, Address } from 'src/app/services/authenticate/authentication.service';

@Component({
  selector: 'app-registration2',
  templateUrl: './registration2.page.html',
  styleUrls: ['./registration2.page.scss'],
})
export class Registration2Page implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  formSubmit(form: NgForm) {
    let addRess: Address = form.value
    
    this.authService.setAddress(addRess)
    this.authService.getAddress()
  }

  ngOnInit() {
  }

}
