import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../ItemClass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  
  addItemForm: FormGroup;
  formSubmitted = false;
  browseMainCategories = ['Fine Arts', 'Culture', 'Decorative arts', 'Machines and Transportation',
    'Fashion and Textiles', 'Natural History'];
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit():void{
    this.addItemForm = new FormGroup ({
      //'url': new FormControl (null, Validators.required),
      // 'category': new FormControl (null, Validators.required),
      // 'keywords': new FormControl (null),
      title: new FormControl (null, Validators.required),
      // 'country/creator': new FormControl (null),
      // 'year': new FormControl (null),
      // 'condition': new FormControl (null),
      // 'media': new FormControl (null),
      // 'description': new FormControl (null),
      // 'references': new FormControl (null)
    });

  }


  onSubmit(){
    // let formData = this.addItemForm.value;
    // this.http.post('urlLinkGoesHere', formData);
    //do I need to subscribe here for the post to function

    // let item = new Item(this.addItemForm.title);

    this.http.post('http://localhost:8080/api/item', 
              this.addItemForm.value).subscribe( post => {console.log(post.valueOf())});

              // fetch('http://localhost:8080/api/item', {
              //   method: 'POST',
              //   headers: {
              //     'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
              //   },
              //   body: JSON.stringify(item),
              // }).then(function (response) {
              //   // get id number from response here { id: idNumber }
              //   response.json().then(function (json) {
          
              //     this.id = Number(json.id);
          
              //     console.log("json ids", this.id);
          
              //   }.bind(this));
              // }.bind(this)).then(function (data) {
              //   console.log('Success:', data);
              // }).catch(function (error) {
              //   console.error('Error:', error);
              // });          

    console.log(this.addItemForm.value);
    this.addItemForm.reset();
    this.formSubmitted = true;
    this.router.navigate(['/member-page/my-collections']);

  }

}

