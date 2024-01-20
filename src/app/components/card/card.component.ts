import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() gameCover: string = "";
  @Input() gameLabel: string = "";
  @Input() gameType: string = "XPTO | PS4";
  @Input() gamePrice: string = "399,90";

  constructor() {}
}
