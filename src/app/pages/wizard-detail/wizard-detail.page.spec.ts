import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardDetailPage } from './wizard-detail.page';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('WizardDetailPage', () => {
  let component: WizardDetailPage;
  let fixture: ComponentFixture<WizardDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardDetailPage],
      providers: [
        provideHttpClient(),
        { provide: ActivatedRoute, useValue: 'wizard/' },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
