import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  itemData = {
    imagePath: 'https://secure.img1-ag.wfcdn.com/im/18951009/resize-h800%5Ecompr-r85/4007/4007560/Sovereign+of+The+Seas+Monumental+Model+Ship.jpg',
    title: 'Item Title goes here-very long title',
    description: 'A few words of description will go here, sample of a few lines of words.  The details of the item will be expended a back-end team will add more controllers and we have one common class to work with.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
