import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService, PersonalInfo } from 'src/app/services/authenticate/authentication.service';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'app-registration1',
  templateUrl: './registration1.page.html',
  styleUrls: ['./registration1.page.scss'],
})
export class Registration1Page implements OnInit {

  readonly contactMasking:  MaskitoOptions = {
    mask: ['+', '6', '3', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();

  constructor(
    private authService: AuthenticationService
  ) { }

  formSubmit(form: NgForm) {
    let personal: PersonalInfo = form.value;

    this.authService.setPersonalInfo(personal);
    this.authService.getPersonalInfo();
  }

  ngOnInit() {
  }

}
