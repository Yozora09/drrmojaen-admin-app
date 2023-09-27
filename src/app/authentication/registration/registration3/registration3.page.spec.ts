import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration3Page } from './registration3.page';

describe('Registration3Page', () => {
  let component: Registration3Page;
  let fixture: ComponentFixture<Registration3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Registration3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
