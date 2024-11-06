import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WizardCardComponent } from './wizard-card.component';
import { signal } from '@angular/core';
import { Wizard } from '../../models/wizard';
import { ActivatedRoute } from '@angular/router';

describe('WizardCardComponent', () => {
  let component: WizardCardComponent;
  let fixture: ComponentFixture<WizardCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WizardCardComponent],
      providers: [{ provide: ActivatedRoute, useValue: '/wizard/test' }],
    }).compileComponents();

    fixture = TestBed.createComponent(WizardCardComponent);
    component = fixture.componentInstance;
    const wizardWritableSignal = signal({} as Wizard);
    component.wizard =
      wizardWritableSignal as unknown as typeof component.wizard;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
