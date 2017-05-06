/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoseInfoComponent } from './lose-info.component';

describe('LoseInfoComponent', () => {
  let component: LoseInfoComponent;
  let fixture: ComponentFixture<LoseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
