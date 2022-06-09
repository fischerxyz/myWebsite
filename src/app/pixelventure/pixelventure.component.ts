import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pixelventure',
  templateUrl: './pixelventure.component.html',
  styleUrls: ['./pixelventure.component.css']
})
export class PixelventureComponent implements OnInit {
  emblemHeight: string = "0px";
  emblemWidth: string = "0px";

  hvoEmblemHeight: string = "0px";
  hvoEmblemWidth: string = "0px";

  scrollbarPosition: number = 0;
  isBackward: boolean = false;

  isAnimation: boolean = false;

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient) {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  } 

  onSubmit(data:any){

  }
  
  openEmailDialog(): void{
    console.log("open")
    var modal = document.getElementById("emailDialog") as any;
    if(modal != null){
      modal.showModal();
    }
  }

  closeEmailDialog(): void{
    console.log("close")
    var modal = document.getElementById("emailDialog") as any;
    if(modal != null){
      modal.close();
    }
  }

  sendEmail(formData: any): void{
    console.log("Send")
    console.log(formData)
    var url  = "https://mailthis.to/davidfischer081998@gmail.com";
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data;');
    
    this.http.post(url, formData, {headers: headers}).subscribe(response => {
      console.log(response);
      this.closeEmailDialog();
    }, error => {
      console.log("Error");
      console.log(error);
    })
  }

  
  ngOnInit(): void {
    //window.scrollTo(0, 0);  
    var displayResultionX = window.innerHeight;

    var containers = Array.prototype.slice.call(document.getElementsByClassName("container"));
    
    this.emblemHeight = displayResultionX / 23 * 5 + 'px';   
    this.emblemWidth = displayResultionX / 23 * 5 / 6 * 5 + 'px';  

    this.hvoEmblemHeight = displayResultionX / 23 * 5 / 17 * 8 + 'px';   
    this.hvoEmblemWidth = displayResultionX / 23 * 5 + 'px';  

    for(var i = 0; i < containers.length; i++){
      //Height = Resolution - Padding - Borderradius
      containers[i].addEventListener("webkitAnimationStart", () => {
        this.isAnimation = true;
        console.log("animation")
      });
      containers[i].addEventListener("webkitAnimationEnd", () => {
        this.isAnimation = false;
        console.log("animationend")
      });
      containers[i].style.height = displayResultionX - 48 + 'px';     
    }
  }
  

  @HostListener("window:scroll", []) onScroll() {
    // do some stuff here when the window is scrolled
    const scrollbarPosition = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;

    this.isBackward = scrollbarPosition < this.scrollbarPosition;
    this.scrollbarPosition = scrollbarPosition;

    var displayHeight = window.innerHeight;
    var page = document.getElementById("main");
    var height = page?.offsetHeight;
    var width = page?.offsetWidth;

    if(height != null){
      height = height - displayHeight + 20;
    }
   
    var containers = Array.prototype.slice.call(document.getElementsByClassName("container"));
    var figures = Array.prototype.slice.call(document.getElementsByClassName("figure"));

    for(var i = 0; i < containers.length; i++){
      var clientHeight = 0;
      if(height != null){
        clientHeight = height/containers.length;
      }
      else{
        clientHeight = containers[i].clientHeight;
      }
  
      if((scrollbarPosition >= i * clientHeight) && (scrollbarPosition < (i + 1) * clientHeight)){
        if(width != null){
          var position = width/(clientHeight/(scrollbarPosition - i * clientHeight)) - 60;
          figures[i].style.left = position + 'px';
        }
        if(containers[i].classList.contains('invisible')){
          containers[i].animate([
            { transform: 'translateX(' + window.innerWidth + 'px)' },
            { transform: 'translateX(0px)' }
          ], 
          {
            duration: 1000,
            iterations: 1
          });
          containers[i].classList.add('visible');
          containers[i].classList.remove('invisible');
        }   
      }
      else{
        figures[i].style.left = 0 + 'px';
        if(containers[i].classList.contains('visible')){
          containers[i].classList.add('invisible');
          containers[i].classList.remove('visible');
        }

      }
    }
  }
}
