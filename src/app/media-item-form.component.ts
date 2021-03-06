import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/Router';
 
import { MediaItemService } from './media-item.service';
import { lookupLists, lookupListToken } from './media-providers';



@Component({
	selector: 'media-item-form',
	templateUrl:'./media-item-form.component.html',
	styleUrls:['./media-item-form.component.css']
})

export class MediaItemFormComponent{
	form;
  

	constructor(private formBuilder : FormBuilder, private mediaItemService : 
               MediaItemService, 
               @Inject(lookupListToken) public lookupLists
               ){
   //  console.log("inside form method");
	}
    
    //called on initialization
    // pass validator function as second parameter for form control
	ngOnInit(){
		 this.form = this.formBuilder.group({
            mediaType: this.formBuilder.control('Movies'),
            name: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: this.formBuilder.control(''),
            year: this.formBuilder.control('',this.yearValidator),
        });
	}

    //custom validator to validate year
	yearValidator(control){
      if(control.value.trim().length == 0){
          return null;
      }
      let year = parseInt(control.value);
      let minYear = 1800;
      let maxYear = 2017;
      if(year >= minYear && year <= maxYear){
           return null;
      }else{
      	return {  'year':{min: minYear,
                  max: maxYear }
      };
	}}

    //submitting a function by clicking save button
    //after submitting it redirects to same movietype list
	 onSubmit(mediaItem) {
        this.mediaItemService.addMediaItems(mediaItem).subscribe(
          () => {
              //this.router.navigate(['/',mediaItem.mediaType]);
          });
    }
}