import { Component, input, InputSignal } from '@angular/core';
import { Wizard } from '../../models/wizard';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage],
})
export class WizardCardComponent {
  wizard: InputSignal<Wizard> = input.required<Wizard>();

  isImgEmpty() {
    return true;
  }
}
