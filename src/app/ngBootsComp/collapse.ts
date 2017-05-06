import { Component } from '@angular/core';

@Component({
  selector: 'collapse-demo',
  template: `<accordion>
  <accordion-group heading="Static Header, initially expanded"
                   [panelClass]="customClass"
                   [isOpen]="isFirstOpen">
    This content is straight in the template.
  </accordion-group>
  <accordion-group heading="Content 1">
    <p>accordion 1</p>
  </accordion-group>
  <accordion-group heading="Content 2" panelClass="customClass">
    <p>accordion 2</p>
  </accordion-group>
</accordion>`,
  styles:[`.card.customClass,
.card.customClass .card-header,
.panel.customClass {
  background-color: #5bc0de;
  color: #fff;
}
.panel.customClass  {
  background-color: #337aa7;
}`]
})
export class CollapseDemoComponent {
  public isCollapsed:boolean = false;

  public customClass: string = 'customClass';
  public isFirstOpen: boolean = true;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
}
