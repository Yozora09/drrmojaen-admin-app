import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration2Page } from './registration2.page';

describe('Registration2Page', () => {
  let component: Registration2Page;
  let fixture: ComponentFixture<Registration2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Registration2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
