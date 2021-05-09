import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;
  let hostElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ SearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    hostElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have placeholder`, () => {
    expect(hostElement.querySelector('input').getAttribute('placeholder')).toBe(component.placeholder);
  });

  it('should emit on value change', () => {
    const value = 'mysearchquery';
    spyOn(component.onSearch, 'emit');

    expect(component.control.value).toBe('');
    component.control.setValue(value);
  
    fixture.detectChanges();

    expect(component.control.value).toBe(value);

    setTimeout(() => expect(component.onSearch.emit).toHaveBeenCalledWith(value), 750);
  });
});
