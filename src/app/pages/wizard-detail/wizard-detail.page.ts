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

  private readonly wizardService: WizardService = inject(WizardService);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit() {
    this.wizardService
      .fetchWizardById(this.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(wizard => this.wizard.set(wizard));
  }
}
