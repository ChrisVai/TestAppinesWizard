import { Component, input, InputSignal } from '@angular/core';
import { Spell } from '../../models/spell';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss'],
  standalone: true,
})
export class SpellCardComponent {
  spell: InputSignal<Spell> = input.required<Spell>();
}
