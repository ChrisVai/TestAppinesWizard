import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardDetailPage } from './wizard-detail.page';

describe('WizardDetailPage', () => {
  let component: WizardDetailPage;
  let fixture: ComponentFixture<WizardDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
