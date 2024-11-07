import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Wizard } from '../models/wizard';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  private readonly http: HttpClient = inject(HttpClient);
  private hpApiUrl: string = 'https://hp-api.onrender.com/api';

  //return all the Wizards as a Signal<Wizard[]>
  fetchWizards(): Signal<Wizard[]> {
    return toSignal(
      this.http.get<Wizard[]>(`${this.hpApiUrl}/characters`).pipe(
        map((wizards: Wizard[]) => {
          // used to truncate base URL and using provideImageKitLoader() for NgOptimizedImage's preload
          for (const wizard of wizards) {
            wizard.image = wizard.image.slice(28);
          }
          return wizards;
        }),
      ),
      { initialValue: [] },
    );
  }
  //return a Wizard by id as an Observable
  fetchWizardById(id: string): Observable<Wizard> {
    return this.http.get<Wizard[]>(`${this.hpApiUrl}/character/${id}`).pipe(
      map((wizards: Wizard[]) => {
        // used to truncate base URL and using provideImageKitLoader() for NgOptimizedImage's preload
        for (const wizard of wizards) {
          wizard.image = wizard.image.slice(28);
        }
        // used to return a Wizard : api call return only one wizard as array
        return wizards[0];
      }),
    );
  }
}
