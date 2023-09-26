import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-splash',
  templateUrl: './custom-splash.page.html',
  styleUrls: ['./custom-splash.page.scss'],
})
export class CustomSplashPage implements OnInit {

  load = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // delay to next page
    setTimeout(() => {
      this.navigate();
      this.load = true;
    }, 1500);
  }

  // navigate to next page
  navigate() {
    if (this.load) {
      return;
    }

    // default landing page
    this.router.navigate(['/onboard-container']);
  }

}
