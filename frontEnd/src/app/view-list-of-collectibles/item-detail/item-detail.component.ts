import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from 'src/app/ItemClass';
import { ViewItemsService } from '../viewItems.service';

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

  // itemData = {
  //   imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words.  The details of the item will be expended a back-end team will add more controllers and we have one common class to work with.'
  // };

  constructor(private viewItemsService: ViewItemsService,
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

    // this.itemData = this.viewItemsService.getItemData(0);

  }

}
