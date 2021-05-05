import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Input() placeholder: string = 'Search';

  @Output() onSearch = new EventEmitter();

  public control: FormControl = new FormControl('');
  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.checkForValueChanges();
  }

  public onKeydownEnter(): void {
    this.subscription.unsubscribe();
    this.onSearch.emit(this.control.value);
    this.checkForValueChanges();
  }

  private checkForValueChanges(): void {
    this.subscription = this.control.valueChanges
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
      ).subscribe(value => this.onSearch.emit(value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
