import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Pokemon } from '@app/models/pokemon';

import { TeaserComponent } from './teaser.component';

describe('TeaserComponent', () => {
  let component: TeaserComponent;
  let fixture: ComponentFixture<TeaserComponent>;
  let hostElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ TeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserComponent);
    component = fixture.componentInstance;
    hostElement = fixture.nativeElement;

    component.pokemon = new Pokemon({
      'id': 1,
      'name': 'dummy',
      'favorited': false,
      'caught': false,
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(hostElement.querySelector('.subtitle').textContent).toBe(component.pokemon.name);
  });

  it('should have image', () => {
    expect(hostElement.querySelector('img').getAttribute('src')).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${component.pokemon.id}.png`);
  });

  it('should have working favorite button', () => {
    const button = hostElement.querySelector('.card-footer button:first-child');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.pokemon.favorited).toBeTrue();
  });

  it('should have working catch button', () => {
    const button = hostElement.querySelector('.card-footer .card-footer-item:nth-child(2) button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.pokemon.caught).toBeTrue();
  });
});
