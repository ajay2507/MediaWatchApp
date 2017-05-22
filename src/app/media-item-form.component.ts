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
	ngOnInit(){
		 this.form = new FormGroup({
            mediaType: new FormControl('Movies'),
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: new FormControl(''),
            year: new FormControl(''),
        });
	}

    //submitting a function by clicking save button
	 onSubmit(mediaItem) {
        console.log(mediaItem);
    }
}