import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.sass']
})
export class TeaserComponent implements OnInit {

  @Input() pokemon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
