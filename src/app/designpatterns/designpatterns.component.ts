import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor() { }

  title : string = 'Design Patterns Documentation';

  ngOnInit() {
  }

}
