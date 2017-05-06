import {Component, Input} from '@angular/core';
import {AccordionConfig} from 'ng2-bootstrap/accordion';
import {LoginService} from '../login.service';
// such override allows to keep some initial values

export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), {closeOthers: true});
}

@Component({
  selector: 'demo-accordion',
  template: `<accordion>
   <accordion-group #group panelClass="customClass" class="customClass">
    <div accordion-heading>
     {{title}}
      <i class="pull-right float-xs-right glyphicon"
         [ngClass]="{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}"></i>
    </div>
    {{content}}
  </accordion-group>
</accordion>`,
  styles: [`
  .card.customClass,
.card.customClass .card-header,
.panel.customClass {
  background-color: #5bc0de;
  color: #fff;
}
.panel.customClass .panel-body {
  background-color: #337aa7;
}
`],
  providers: [{provide: AccordionConfig, useFactory: getAccordionConfig}]
})
export class DemoAccordionConfigComponent {

  @Input() title: string;
  @Input() content: string;

  constructor(public loginService: LoginService) {
    console.log(this.title, this.content)
  }

  public customClass: string = 'customClass';
}
