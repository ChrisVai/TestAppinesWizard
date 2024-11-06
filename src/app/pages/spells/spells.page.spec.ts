import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellsPage } from './spells.page';
import { provideHttpClient } from '@angular/common/http';

describe('SpellsPage', () => {
  let component: SpellsPage;
  let fixture: ComponentFixture<SpellsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellsPage],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
