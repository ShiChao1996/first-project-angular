import {Component, Output, EventEmitter, OnInit} from "@angular/core";

@Component({
  selector: 'app-admin-new-edit',
  templateUrl: 'admin-new-edit.component.html',
  styleUrls: ['admin-new-edit.component.css']
})
export class AdminNewEditComponent implements OnInit {
  ckeditorContent = "";
  constructor() { }
  config={
    filebrowserBrowseUrl :"&&&&&",
    filebrowserUploadUrl :"&&&"
  };
  ngOnInit() {
  }

}
