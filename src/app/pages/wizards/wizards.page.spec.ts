import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardsPage } from './wizards.page';
import { provideHttpClient } from '@angular/common/http';

describe('WizardsPage', () => {
  let component: WizardsPage;
  let fixture: ComponentFixture<WizardsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardsPage],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
