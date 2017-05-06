import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-about-card',
  templateUrl: 'about-card.component.html',
  styleUrls: ['about-card.component.css'],
  animations:[
    fadeIn
  ]
})
export class AboutCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
