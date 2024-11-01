import {inject, Injectable, Signal} from '@angular/core';
import {Spell} from "../models/spell";
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  fetchSpells(): Signal<Spell[]> {
    return toSignal(inject(HttpClient).get<Spell[]>('https://hp-api.onrender.com/api/spells'), {initialValue: []});
  }
}
