import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { UserService } from '../user-service';
import { Router } from '@angular/router';
import { fadeIn } from '../../animate/fade-in';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';


@Component({
  selector: 'app-user-info-change',
  templateUrl: 'user-info-change.component.html',
  styleUrls: ['user-info-change.component.css'],
  animations:[
    fadeIn
  ]
})
export class UserInfoChangeComponent implements OnInit {

  currentUser = new User("",'',"","",0,"",0);
  constructor(public userService:UserService,public router:Router) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(
        val=>{this.currentUser = val[0];
        console.log(this.currentUser)}
      )
  }

//图像上传
/*
  options: FancyImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: 'http://some-server.com/upload',
    allowedImageTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    maxImageSize: 3
  };

  onUpload(file: UploadedFile) {
    console.log(file.response);
  }
*/

  saveChange(){
    this.router.navigate(['/user-info'])
  }
  cancel(){
    this.router.navigate(['/user-info'])
  }
}
