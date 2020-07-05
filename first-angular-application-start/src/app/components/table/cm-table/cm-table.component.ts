import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'cm-table',
  templateUrl: './cm-table.component.html',
  styleUrls: ['./cm-table.component.css']
})
export class CmTableComponent implements OnInit {
  @Input() rows: any[];
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}
