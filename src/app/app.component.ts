import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Davids-Website";
  figureHeight: string = "0px";
  figureWidth: string = "0px";

  emblemHeight: string = "0px";
  emblemWidth: string = "0px";

  isAnimation: boolean = false;

  ngOnInit(): void {
    //window.scrollTo(0, 0);  
    var displayResultionX = window.innerHeight;

    var containers = Array.prototype.slice.call(document.getElementsByClassName("container"));

    this.figureHeight = displayResultionX / 23 * 10 + 'px';   
    this.figureWidth = displayResultionX / 23 * 10 / 6 * 5 + 'px';  
    
    this.emblemHeight = displayResultionX / 23 * 5 + 'px';   
    this.emblemWidth = displayResultionX / 23 * 5 / 6 * 5 + 'px';  

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

    var displayHeight = window.innerHeight;
    var page = document.getElementById("main");
    var height = page?.offsetHeight;
    var width = page?.offsetWidth;

    if(height != null){
      height = height - displayHeight + 40;
    }
   
    var containers = Array.prototype.slice.call(document.getElementsByClassName("container"));
    var images = Array.prototype.slice.call(document.getElementsByClassName("image"));

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
          var position = width/(clientHeight/(scrollbarPosition - i * clientHeight)) - 20;
          images[i].style.left = position + 'px';
        }
        if(containers[i].classList.contains('invisible')){
          containers[i].animate([
            // keyframes
            { transform: 'translateX(' + window.innerWidth + 'px)' },
            { transform: 'translateX(0px)' }
          ], {
            // timing options
            duration: 1000,
            iterations: 1
          });
          containers[i].classList.add('visible');
          containers[i].classList.remove('invisible');
        }   
      }
      else{
        images[i].style.left = 0 + 'px';
        if(containers[i].classList.contains('visible')){
          /* containers[i].animate([
            // keyframes
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-' + window.innerWidth + 'px)' },
          ], {
            // timing options
            duration: 1000,
            iterations: 1
          });*/
          containers[i].classList.add('invisible');
          containers[i].classList.remove('visible');
        }

      }
    }
  }
}
