import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "Davids-Website";
  language: string = "en";

  constructor(public translate: TranslateService){
    translate.addLangs(['en', 'ge']);
    translate.setDefaultLang(this.language);
  }

  changeLanguage(){
    if(this.language == "en"){
      this.language = "ge";
  
    }
    else{
      this.language = "en";
    }
    this.translate.setDefaultLang(this.language);
  }
}
