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
        console.log( this.id);
      }

    );

    this.itemData = this.viewItemsService.getItemData(this.id);

  }

  onDelete(){
    let confirm = window.confirm(
      'This item will be permanently deleted. Are you sure you want to delete this itme?');
    if (confirm === true) {
    this.viewItemsService.deleteItem(this.id);
    //add code to delete the item on the back end, will need to include some infor the the back end.
    this. http.delete('http://localhost:8080/api/item').subscribe(response =>{console.log(response)});
    this.router.navigate(['/member-page']);
    } 
  }

}
