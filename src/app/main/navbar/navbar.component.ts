import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  navigateTo(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });        
  }

  openPage(path: string): void {
    window.open(path, "_blank");
  }

  openDialog(page: string): void {
    var modal = document.getElementById(page) as any;
    if(modal != null){
      modal.showModal();
    }
  }
}
