/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportLoseComponent } from './report-lose.component';

describe('ReportLoseComponent', () => {
  let component: ReportLoseComponent;
  let fixture: ComponentFixture<ReportLoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportLoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
