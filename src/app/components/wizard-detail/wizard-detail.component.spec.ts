import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WizardDetailComponent } from './wizard-detail.component';
import { ActivatedRoute } from '@angular/router';
import { signal } from '@angular/core';
import { Wizard } from '../../models/wizard';

describe('WizardDetailComponent', () => {
  let component: WizardDetailComponent;
  let fixture: ComponentFixture<WizardDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WizardDetailComponent],
      providers: [{ provide: ActivatedRoute, useValue: 'wizard/' }],
    }).compileComponents();

    fixture = TestBed.createComponent(WizardDetailComponent);
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
