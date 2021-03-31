import { Component, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service'

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {

  constructor(private viewItemsService: ViewItemsService) { }

  ngOnInit(): void {
  }
  // decided to move this to view-list-of-collections ngOnInit
  // // onFetchMyCollectionData(){
  // //   this.viewItemsService.fetchItems();
  // // }

}
