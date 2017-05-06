import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-report-lose',
  templateUrl: 'report-lose.component.html',
  styleUrls: ['report-lose.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class ReportLoseComponent implements OnInit {
  constructor() { }
  psw:string;
  PswFocus:boolean = false;
  NameFocus:boolean = false;
  pswFocus(){
    this.PswFocus = true;
  }
  pswBlur(){
    this.PswFocus = false;
  }
  nameFocus(){
    this.NameFocus = true;
  }
  nameBlur(){
    this.NameFocus = false;
  }
  ngOnInit() {
  }

  reportLose(){
    console.log(this.psw)
  }
}
