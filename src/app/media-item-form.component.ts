import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
	selector: 'media-item-form',
	templateUrl:'./media-item-form.component.html',
	styleUrls:['./media-item-form.component.css']
})

export class MediaItemFormComponent{
	form;
    
    //called on initialization
    // pass validator function as second parameter for form control
	ngOnInit(){
		 this.form = new FormGroup({
            mediaType: new FormControl('Movies'),
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: new FormControl(''),
            year: new FormControl('',this.yearValidator),
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
	 onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}