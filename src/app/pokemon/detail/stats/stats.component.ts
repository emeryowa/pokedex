import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  @Input() stats;

  constructor() { }

  ngOnInit(): void {
    console.log(this.stats);
  }

}
