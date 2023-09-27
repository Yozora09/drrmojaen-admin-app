import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

// admin information
export interface PersonalInfo {
  firstName: string,
  middleName: string,
  lastName: string,
  sex: string,
  contactNo: number,
  birthDate: any,
}

export interface Address {
  houseNo: number,
  street: string,
  barangay: string,
}

export interface AdminCreds {
  email: string,
  password: string;
}

export interface PassReset {
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  adminLocalId = "";

  personalInfo : PersonalInfo = {
    firstName: "",
    middleName: "",
    lastName: "",
    sex: "",
    contactNo: 0,
    birthDate: ""
  }

  address = {
    houseNo: 0,
    street: "",
    barangay: ""
  }

  adminCreds = {
    email: "",
    password: ""
  }

  passReset = {
    email: ""
  }

  constructor(
    private http: HttpClient,
    private firebaseAuth: AngularFireAuth
  ) { }

  // set and retrieve input values for personal info
  setPersonalInfo(personalInfo: PersonalInfo) {
    this.personalInfo = personalInfo
  }

  getPersonalInfo() {
    return this.personalInfo
  }

  // set and retrieve input values for address
  setAddress(address: Address) {
    this.address = address
  }

  getAddress() {
    return this.address
  }

  // set and retrieve input values for user creds
  setAdminCreds(adminCreds: AdminCreds) {
    this.adminCreds = adminCreds
  }

  getAdminCreds() {
    return this.adminCreds
  }

  // firebase auth using REST API
  // registration of email and password
  signUp(email: any, password: any) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`,
      { email, password, returnSecureToken: true }
    );
  }

  // for authentication of email and password
  login(email: any, password: any) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
      { email, password, returnSecureToken: true }
    );
  }

  // auth password reset
  passwordReset(email: any) {
    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${environment.firebaseConfig.apiKey}`,
      {email, requestType: "PASSWORD_RESET"}
    );
  }

  // signout account
  signOut() {
    return this.firebaseAuth.signOut();
  }

  // setting admin id
  setAdminLocalId(adminId:string){
    this.adminLocalId = adminId;
  }

  getAdminLocalId(){
    return this.adminLocalId;
  }
}
