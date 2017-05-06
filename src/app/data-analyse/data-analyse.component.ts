import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animate/fly-in';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-data-analyse',
  templateUrl: 'data-analyse.component.html',
  styleUrls: ['data-analyse.component.css'],
  animations:[
    flyIn,
    fadeIn
  ]
})
export class DataAnalyseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doughnutChartLabels:string[] = ['食堂消费', '超市消费', '其他'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chart_0Clicked(e:any):void {
    console.log(e);
  }

  public chart_0Hovered(e:any):void {
    console.log(e);
  }



  //柱状图
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['一月', '二月', '三月', '四月', '五月', '六月', '七月'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: '总消费'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: '食堂消费'}
  ];

  // events
  public chart_1Clicked(e:any):void {
    console.log(e);
  }

  public chart_1Hovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }


}
