import { TestBed } from '@angular/core/testing';
import { WizardService } from './wizard.service';
import { provideHttpClient } from '@angular/common/http';
import { signal, Signal } from '@angular/core';
import { Wizard } from '../models/wizard';
import { Observable } from 'rxjs';

describe('WizardService', () => {
  let service: WizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(WizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve an array of Wizards as a Signal', () => {
    const wizards: Signal<Wizard[]> = signal<Wizard[]>([]);
    const wizardsRet: Signal<Wizard[]> = TestBed.runInInjectionContext(() =>
      service.fetchWizards(),
    );
    expect(wizardsRet()).toEqual(wizards());
  });

  it('should retrieve a Wizard as an Observable', () => {
    const id: string = 'test';
    const wizard: Wizard = {} as Wizard;
    let result: Wizard = {} as Wizard;
    TestBed.runInInjectionContext(() =>
      service.fetchWizardById(id).subscribe(res => (result = res)),
    );
    expect(result).toEqual(wizard);
  });
});
