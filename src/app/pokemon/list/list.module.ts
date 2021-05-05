import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaserComponent } from './teaser/teaser.component';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TeaserComponent,
    ListComponent,
    TeaserComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }
