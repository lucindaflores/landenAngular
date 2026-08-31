import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Landen } from './landen';

describe('Landen', () => {
  let component: Landen;
  let fixture: ComponentFixture<Landen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landen],
    }).compileComponents();

    fixture = TestBed.createComponent(Landen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
