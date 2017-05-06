/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserInfoChangeComponent } from './user-info-change.component';

describe('UserInfoChangeComponent', () => {
  let component: UserInfoChangeComponent;
  let fixture: ComponentFixture<UserInfoChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
