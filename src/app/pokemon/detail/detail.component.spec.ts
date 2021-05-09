import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pokemon } from '@app/models/pokemon';

import { DetailComponent } from './detail.component';
import { MovesComponent } from './moves/moves.component';
import { StatsComponent } from './stats/stats.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            data: {
              pokemon: new Pokemon({
                'id': 1,
                'name': 'dummy',
                'favorited': false,
                'caught': false,
              })
            }
          }
        }
      }],
      declarations: [ DetailComponent, MovesComponent, StatsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
