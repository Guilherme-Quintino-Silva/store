import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [],
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.scss'
})
export class CardLabelComponent implements OnInit {
  @Input() gameLabel: string = "";
  constructor() {}
  ngOnInit(): void {
  }

}
