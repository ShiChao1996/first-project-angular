/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfoSearchComponent } from './info-search.component';

describe('InfoSearchComponent', () => {
  let component: InfoSearchComponent;
  let fixture: ComponentFixture<InfoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
