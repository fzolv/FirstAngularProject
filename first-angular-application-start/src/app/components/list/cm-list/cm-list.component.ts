import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cm-list',
  templateUrl: './cm-list.component.html',
  styleUrls: ['./cm-list.component.css']
})
export class CmListComponent implements OnInit {
  list: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
