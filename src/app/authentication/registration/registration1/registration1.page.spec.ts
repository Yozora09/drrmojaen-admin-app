import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration1Page } from './registration1.page';

describe('Registration1Page', () => {
  let component: Registration1Page;
  let fixture: ComponentFixture<Registration1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Registration1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
