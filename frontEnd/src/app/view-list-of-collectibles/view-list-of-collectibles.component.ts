import { Component, OnInit } from '@angular/core';
import { ViewItemsService } from '../viewItems.service';

@Component({
  selector: 'app-view-list-of-collectibles',
  templateUrl: './view-list-of-collectibles.component.html',
  styleUrls: ['./view-list-of-collectibles.component.scss']
})
export class ViewListOfCollectiblesComponent implements OnInit {

  viewMyCollection: boolean = true;
  items = [];

  //no longer necessary to hard code this here
  // items = [{
  //   imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },
  // {
  //   imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://media.istockphoto.com/photos/balls-picture-id488816326',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://media.istockphoto.com/photos/rocket-on-black-background-picture-id172288174',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://media.istockphoto.com/photos/antique-change-picture-id95520796',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://media.istockphoto.com/photos/antique-change-picture-id95520796',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },

  // {
  //   imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
  //   title: 'Item Title goes here-very long title',
  //   description: 'A few words of description will go here, sample of a few lines of words'
  // },
// ];

  constructor(private viewItemsService: ViewItemsService) { }

  ngOnInit(): void {
    this.items = this.viewItemsService.getItems();

    /*alternative way of getting items without using a function, which might be better for once we are fetching to an array in that service:*/
    // this.items = this.viewItemsService.listOfItems;
  }

}
