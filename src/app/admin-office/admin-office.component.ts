import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-admin-office',
  templateUrl: './admin-office.component.html',
  styleUrls: ['./admin-office.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class AdminOfficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
