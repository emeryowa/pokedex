import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.sass']
})
export class MovesComponent implements OnInit {

  @Input() moves;

  constructor() { }

  ngOnInit(): void {
  }

}
