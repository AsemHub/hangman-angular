import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poor-kid',
  templateUrl: './poor-kid.component.html',
  styleUrls: ['./poor-kid.component.css'],
})
export class PoorKidComponent implements OnInit {
  @Input() img: string = ''
  constructor() {}

  ngOnInit(): void {}
}
