import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() startDate: string = "";
  @Input() endDate?: string = "";

  @Input() description: string = "";
  @Input() location: string = "";

  ngOnInit(): void {
  }
}
