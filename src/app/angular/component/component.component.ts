import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor() { }

  title: string = "Angular - Component";

  ngOnInit() {
  }

}
