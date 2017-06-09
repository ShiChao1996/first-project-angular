import { Component,HostListener,ElementRef,Renderer} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/merge';
import { AnimationService } from './animate/animation';
import { LoginService } from './login.service';
// Add the RxJS Observable operators.
import './rxjs-oprators';
import { AppService } from './app.service';
import { flyIn } from './animate/fly-in';
import { width } from './animate/width';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    flyIn,
    width
  ]
})
export class AppComponent {

  currentTime:Date;
  show:boolean = false;
  private globalClickCallbackFn: Function;
  private loginSuccessCallbackFn: Function;
  constructor(public elementRef: ElementRef,
              public renderer: Renderer,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public loginService:LoginService,
              public animate:AnimationService,
              public appService:AppService) {}

  ngOnInit() {
  /*  this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log("全局监听点击事件>" + event);
    })*/
   // this.date = new Date();
   setInterval(() =>{
      this.currentTime = new Date();
    },1000);
  }
}
