import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  
  constructor(private http: HttpClient) { }

  ngOnInit():void{
    this.addItemForm = new FormGroup ({
      'url': new FormControl (null, Validators.required),
      'category': new FormControl (null, Validators.required),
      'keywords': new FormControl (null),
      'title': new FormControl (null, Validators.required),
      'country/creator': new FormControl (null),
      'year': new FormControl (null),
      'condition': new FormControl (null),
      'media': new FormControl (null),
      'description': new FormControl (null),
      'references': new FormControl (null)
    });

  }


  onSubmit(){
    // let formData = this.addItemForm.value;
    // this.http.post('urlLinkGoesHere', formData);
    //do I need to subscribe here for the post to function

    this.http.post('https://testitemform-default-rtdb.firebaseio.com/', 
              this.addItemForm.value).subscribe( post => {console.log(post.valueOf())});

    console.log(this.addItemForm.value);
    this.addItemForm.reset();
    this.formSubmitted = true;
  }

}
