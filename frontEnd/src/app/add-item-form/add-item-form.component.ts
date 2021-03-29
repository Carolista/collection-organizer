import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  postData: { 
    url: string;
    category: string;
    keywords: string[];
    title: string;
    countryCreator: string;
    year: number;
    condition: string;
    media: string;
    description: string;
    references: string;}
  addItemForm: FormGroup;
  formSubmitted = false;
  browseMainCategories = ['Fine Arts', 'Culture', 'Decorative arts', 'Machines and Transportation',
    'Fashion and Textiles', 'Natural History'];

  subCategories = ['a', 'b', 'c'];
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit():void{
    this.addItemForm = new FormGroup ({
      'title': new FormControl (null, Validators.required),
      'imagePath': new FormControl (null, Validators.required),
      'category': new FormControl (null, Validators.required),
      'subCategory': new FormControl(null),
      'description': new FormControl (null),
      'creator': new FormControl (null),
      'yearCreated': new FormControl (null),
      'placeOfOrigin': new FormControl(null),
      'yearAcquired': new FormControl(null),
      'condition': new FormControl (null),
      'mediaType': new FormControl (null),
      'references': new FormControl (null)
    });

  }


  onSubmit(){
    // let formData = this.addItemForm.value;
    // this.http.post('urlLinkGoesHere', formData);
    //do I need to subscribe here for the post to function
    this.postData  = this.addItemForm.value

    this.http.post('http://localhost:8080/api/item', 
              this.addItemForm.value).subscribe( post => {console.log(post.valueOf())});

    console.log(this.addItemForm.value);
    this.addItemForm.reset();
    this.formSubmitted = true;
    this.router.navigate(['/member-page']);
  }

}