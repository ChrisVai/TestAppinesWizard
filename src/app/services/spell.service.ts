import { inject, Injectable, Signal } from '@angular/core';
import { Spell } from '../models/spell';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SpellService {
  private hpApiUrl: string = 'https://hp-api.onrender.com/api';
  //return all spells as a Signal<Spell[]>
  fetchSpells(): Signal<Spell[]> {
    return toSignal(
      inject(HttpClient).get<Spell[]>(`${this.hpApiUrl}/spells`),
      { initialValue: [] },
    );
  }
}
