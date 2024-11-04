import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WizardDetailComponent } from './wizard-detail.component';

describe('WizardDetailComponent', () => {
  let component: WizardDetailComponent;
  let fixture: ComponentFixture<WizardDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WizardDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WizardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
