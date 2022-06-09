import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Output() openEmailDialog = new EventEmitter<boolean>();
  
  openModalEmail(){
    this.openEmailDialog.emit(true);
  }
  
  ngOnInit(): void {
    
  }
}



