import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Davids-Website';


  ngOnInit(): void {
    //window.scrollTo(0, 0);  
    var displayResultionX = window.innerHeight;

    var containers = Array.prototype.slice.call(document.getElementsByClassName("container"));

    for(var i = 0; i < containers.length; i++){
      //Height = Resolution - Padding - Borderradius
      containers[i].style.height = displayResultionX - 32 + 'px';     
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
        console.log(images[i].style.visibility != 'visible')
        if(containers[i].style.visibility != 'visible'){
          containers[i].animate([
            // keyframes
            { transform: 'translateX(2000px)' },
            { transform: 'translateX(0px)' }
          ], {
            // timing options
            duration: 1000,
            iterations: 1
          });
          containers[i].style.visibility = 'visible';
          containers[i].style.position = 'fixed';
        }   
      }
      else{
        images[i].style.left = 0 + 'px';
        if(containers[i].style.visibility != 'hidden'){
          containers[i].animate([
            // keyframes
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-2000px)' }
          ], {
            // timing options
            duration: 1000,
            iterations: 1
          });
          containers[i].style.visibility = 'hidden'; 
          containers[i].style.position = 'static';
        }

      }
    }
  }
}
