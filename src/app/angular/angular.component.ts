import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor() { }

  title : string = 'Angular Documentation';

  ngOnInit() {
  }

}
