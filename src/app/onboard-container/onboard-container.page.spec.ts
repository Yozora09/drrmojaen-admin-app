import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnboardContainerPage } from './onboard-container.page';

describe('OnboardContainerPage', () => {
  let component: OnboardContainerPage;
  let fixture: ComponentFixture<OnboardContainerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OnboardContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
