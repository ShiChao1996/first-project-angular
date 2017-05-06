import {Component, OnInit, Input} from '@angular/core';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'grid',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements OnInit {
  @Input() columns: any[];
  @Input() rows: any[];
  @Input() type: "blue";

  constructor() {
  }

  ngOnInit() {
  }

}
