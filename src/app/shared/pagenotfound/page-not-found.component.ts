import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }
  
  title: string = 'Oop!!! The resource is not available';

  ngOnInit() {
  }

}
