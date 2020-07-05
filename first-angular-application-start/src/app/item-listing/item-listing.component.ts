import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item-service.service';


@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.css'],
  providers: [ItemService]
})
export class ItemListingComponent implements OnInit {
  itemData: any[];
  itemCols: string[];

  constructor(private service: ItemService) { }

  ngOnInit() {
    this.service.getData().subscribe({
      next: items => {this.itemData = items; 
                      this.itemCols = Object.keys(items[0])},
      error: err => console.log(err)
    });
  }

}
