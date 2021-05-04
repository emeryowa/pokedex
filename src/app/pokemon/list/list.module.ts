import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaserComponent } from './teaser/teaser.component';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TeaserComponent,
    ListComponent,
    TeaserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }
