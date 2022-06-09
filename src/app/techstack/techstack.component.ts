import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'techstack',
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.css']
})
export class TechstackComponent implements OnInit {
  size: number = 120;
  hoveredSection: string = "";
  headline: string = "";
  fullStars: number = 0;
  halfStars: number = 0;
  emptyStars: number = 0;

  ngOnInit(): void {  
  }

  hover(section: string){
    this.hoveredSection = section;   
    this.loadText();
  }

  hoverOut(){
    this.hoveredSection = "";
    this.loadText();
  }

  loadText(){
      switch(this.hoveredSection){
        case('angular'):{
            this.headline = "Angular";
            this.fullStars = 4;
            this.halfStars = 1;
            this.emptyStars = 0;
            break;
        }
        case('azure'):{
            this.headline = "Azure DevOps";
            this.fullStars = 4;
            this.halfStars = 0;
            this.emptyStars = 1;
            break;
        }
        case('csharp'):{
            this.headline = "C#";
            this.fullStars = 4;
            this.halfStars = 1;
            this.emptyStars = 0;
            break;
        }
        case('dotnet'):{
            this.headline = ".Net";
            this.fullStars = 4;
            this.halfStars = 0;
            this.emptyStars = 1;
            break;
        }
        case('git'):{
            this.headline = "Git";
            this.fullStars = 4;
            this.halfStars = 0;
            this.emptyStars = 1;
            break;
        }
        case('html'):{
            this.headline = "HTML";
            this.fullStars = 4;
            this.halfStars = 0;
            this.emptyStars = 1;
            break;
        }
        case('javascript'):{
            this.headline = "JavaScript";
            this.fullStars = 3;
            this.halfStars = 1;
            this.emptyStars = 1;
            break;
        }
        case('solidity'):{
            this.headline = "Solidity";
            this.fullStars = 2;
            this.halfStars = 1;
            this.emptyStars = 2;
            break;
        }
        case('typescript'):{
            this.headline = "TypeScript";
            this.fullStars = 4;
            this.halfStars = 0;
            this.emptyStars = 1;
            break;
        }
        default:{
            this.headline = "";
            this.fullStars = 0;
            this.halfStars = 0;
            this.emptyStars = 5;
            break;
        }
      }
  }
}



