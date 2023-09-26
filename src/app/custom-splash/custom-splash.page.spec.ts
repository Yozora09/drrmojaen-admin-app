import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomSplashPage } from './custom-splash.page';

describe('CustomSplashPage', () => {
  let component: CustomSplashPage;
  let fixture: ComponentFixture<CustomSplashPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
