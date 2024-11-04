import { Component, input, InputSignal } from '@angular/core';
import { Wizard } from '../../models/wizard';
import { IonicModule } from '@ionic/angular';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wizard-detail-component',
  templateUrl: './wizard-detail.component.html',
  styleUrls: ['./wizard-detail.component.scss'],
  standalone: true,
  imports: [IonicModule, DatePipe, NgOptimizedImage, RouterLink],
})
export class WizardDetailComponent {
  wizard: InputSignal<Wizard> = input.required<Wizard>();
  constructor() {
    addIcons({ chevronBackOutline });
  }

  dateParser(dateString: string): string {
    let year = dateString.substring(6, 10);
    let month = dateString.substring(3, 5);
    let day = dateString.substring(0, 2);
    return year + '-' + month + '-' + day;
  }
}