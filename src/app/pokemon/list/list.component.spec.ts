import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { SearchInputComponent } from './search-input/search-input.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let hostElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent, SearchInputComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    hostElement = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have search input', () => {
    expect(hostElement.querySelector('app-search-input')).toBeDefined();
  });

  it('should have my wishlist button', () => {
    const button = hostElement.querySelector('.my-wishlist-button');

    expect(button).toBeDefined();
    expect(button.textContent).toBe(' My Wishlist star')
  });

  it('should have my pokemon button', () => {
    const button = hostElement.querySelector('.my-pokemon-button');

    expect(button).toBeDefined();
    expect(button.textContent).toBe(' My Pokemon catching_pokemon')
  });

  it('should have load more button', () => {
    const button = hostElement.querySelector('.load-more-button');

    expect(button).toBeDefined();
    expect(button.textContent).toBe('Load more')
  });

  it('should have cards', () => {
    const card = hostElement.querySelector('pokemon-cards app-teaser:first-child .card');
    expect(card).toBeDefined();
  });
});
