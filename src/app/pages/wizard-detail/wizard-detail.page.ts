import {
  Component,
  DestroyRef,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { WizardService } from '../../services/wizard.service';
import { Wizard } from '../../models/wizard';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WizardDetailComponent } from '../../components/wizard-detail/wizard-detail.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-wizard-detail-page',
  templateUrl: './wizard-detail.page.html',
  styleUrls: ['./wizard-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    WizardDetailComponent,
  ],
})
export class WizardDetailPage implements OnInit {
  @Input({ required: true }) id!: string;

  wizard: WritableSignal<Wizard> = signal<Wizard>({} as Wizard);

  private readonly _wizardService: WizardService = inject(WizardService);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit() {
    this._wizardService
      .fetchWizardById(this.id)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        map((wizard: Wizard) => {
          //capitalize first letter of these wizard's attributes
          wizard.species = this.capitalizeFirstLetter(wizard.species);
          wizard.gender = this.capitalizeFirstLetter(wizard.gender);
          wizard.ancestry = this.capitalizeFirstLetter(wizard.ancestry);
          wizard.eyeColour = this.capitalizeFirstLetter(wizard.eyeColour);
          wizard.hairColour = this.capitalizeFirstLetter(wizard.hairColour);
          wizard.patronus = this.capitalizeFirstLetter(wizard.patronus);
          return wizard;
        }),
      )
      .subscribe(wizard => this.wizard.set(wizard));
  }

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
