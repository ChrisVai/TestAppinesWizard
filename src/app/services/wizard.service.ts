import { inject, Injectable, Signal } from '@angular/core';
import { Spell } from '../models/spell';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Wizard } from '../models/wizard';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  fetchWizards(): Signal<Wizard[]> {
    return toSignal(
      inject(HttpClient).get<Wizard[]>(
        'https://hp-api.onrender.com/api/characters',
      ),
      { initialValue: [] },
    );
  }
}
