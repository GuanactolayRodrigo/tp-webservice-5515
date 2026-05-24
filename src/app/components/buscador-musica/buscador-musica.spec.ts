import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorMusicaComponent } from './buscador-musica';

describe('BuscadorMusicaComponent', () => {
  let component: BuscadorMusicaComponent;
  let fixture: ComponentFixture<BuscadorMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorMusicaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorMusicaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
