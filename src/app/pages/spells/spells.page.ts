import {
  Component,
  computed,
  inject,
  signal,
  Signal,
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
import { SpellCardComponent } from '../../components/spell-card/spell-card.component';
import { Spell } from '../../models/spell';
import { SpellService } from '../../services/spell.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    SpellCardComponent,
    IonSearchbar,
  ],
})
export class SpellsPage {
  private readonly _spells: Signal<Spell[]> =
    inject(SpellService).fetchSpells();

  searchInput: WritableSignal<string> = signal('');

  protected filteredSpells: Signal<Spell[]> = computed(() =>
    this._spells().filter(spell =>
      spell.name.toLowerCase().includes(this.searchInput().toLowerCase()),
    ),
  );
}
