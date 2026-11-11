import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesDetail } from './movies-detail';

describe('MoviesDetail', () => {
  let component: MoviesDetail;
  let fixture: ComponentFixture<MoviesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
