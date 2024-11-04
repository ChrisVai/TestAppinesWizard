import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { WizardService } from '../../services/wizard.service';
import { Wizard } from '../../models/wizard';
import { Spell } from '../../models/spell';
import { WizardCardComponent } from '../../components/wizard-card/wizard-card.component';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.page.html',
  styleUrls: ['./wizards.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonSearchbar,
    WizardCardComponent,
  ],
})
export class WizardsPage {
  private readonly wizards: Signal<Wizard[]> =
    inject(WizardService).fetchWizards();

  searchInput: WritableSignal<string> = signal('');

  protected filteredWizards: Signal<Wizard[]> = computed(() =>
    this.wizards().filter(wizard =>
      wizard.name.toLowerCase().includes(this.searchInput().toLowerCase()),
    ),
  );
}
