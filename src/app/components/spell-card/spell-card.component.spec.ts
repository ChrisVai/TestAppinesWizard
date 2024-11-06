import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SpellCardComponent } from './spell-card.component';
import { signal, WritableSignal } from '@angular/core';
import { Spell } from '../../models/spell';

describe('SpellCardComponent', () => {
  let component: SpellCardComponent;
  let fixture: ComponentFixture<SpellCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SpellCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpellCardComponent);
    component = fixture.componentInstance;
    const spellWritableSignal: WritableSignal<Spell> = signal({} as Spell);
    component.spell = spellWritableSignal as unknown as typeof component.spell;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
