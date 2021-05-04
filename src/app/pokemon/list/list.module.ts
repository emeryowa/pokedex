import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaserComponent } from './teaser/teaser.component';
import { ListComponent } from './list.component';
import { ApiService } from 'src/shared/services/api.service';

@NgModule({
  declarations: [
    TeaserComponent,
    ListComponent,
    TeaserComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
  ],
  exports: [
    ListComponent,
  ]
})
export class ListModule { }
