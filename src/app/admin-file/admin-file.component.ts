import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-admin-file',
  templateUrl: './admin-file.component.html',
  styleUrls: ['./admin-file.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class AdminFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
