import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from 'src/app/ItemClass';
import { ViewItemsService } from '../viewItems.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  userLoggedIn: boolean = true;
  

  itemData: Item;
  id: number;
  new: string;

  constructor(private http: HttpClient,
              private viewItemsService: ViewItemsService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.itemData = this.viewItemsService.getItemData(this.id);
        this.viewItemsService.fetchedItemsIndex = this.id;
        console.log( this.id);
      }

    );

    // this.itemData = this.viewItemsService.getItemData(this.id);
    this.viewItemsService.valuesForEditingItem = this.itemData;
    console.log ('values for editing item',this.viewItemsService.valuesForEditingItem);
  }

  onEdit(){
    this.router.navigate(['/member-page/add-item']);
    this.viewItemsService.editMode = true;
    console.log ('edit mode', this.viewItemsService.editMode);
  }

  onDelete(){

    //here this.id refers to index inside the array, and itemId reffers to the id number assigned from the back end
    let confirm = window.confirm(
      'This item will be permanently deleted. Are you sure you want to delete this itme?');
    if (confirm === true) {
    this.viewItemsService.deleteItem(this.id, this.itemData.id);

    this.router.navigate(['/member-page']);
    } 
  }

}
