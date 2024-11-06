import { TestBed } from '@angular/core/testing';
import { SpellService } from './spell.service';
import { provideHttpClient } from '@angular/common/http';
import { EnvironmentInjector, Signal, signal } from '@angular/core';
import { Spell } from '../models/spell';

describe('SpellService', () => {
  let service: SpellService;
  let injector: EnvironmentInjector;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(SpellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all spells[] as a Signal', () => {
    const spell: Signal<Spell[]> = signal<Spell[]>([]);
    const spellRet: Signal<Spell[]> = TestBed.runInInjectionContext(() =>
      service.fetchSpells(),
    );
    expect(spellRet()).toEqual(spell());
  });
});
