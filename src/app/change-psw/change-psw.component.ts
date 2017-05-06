import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animate/fade-in';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css'],
  animations:[
    fadeIn
  ]
})
export class ChangePswComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
