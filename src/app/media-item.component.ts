import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'media-item',
	templateUrl: './media-item.component.html',
	styleUrls: ['./media-item.component.css']
})

export class MediaItemComponent{
    
    //input property using decorator
	@Input() mediaItem;
    //output property using decorator
	@Output() delete = new EventEmitter();

	onDelete() {

	}


}