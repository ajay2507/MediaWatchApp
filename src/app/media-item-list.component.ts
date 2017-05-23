import {Component} from '@angular/core';
import {MediaItemService} from './media-item.service';

@Component({
	selector:'media-item-list',
	templateUrl:'./media-item-list.component.html',
	styleUrls:['./media-item-list.component.css']
})

export class MediaItemListComponent{
    
    mediaItems;

    constructor(private mediaItemService : MediaItemService){
          
    }
    
    // fetching all media items
    ngOnInit(){
       this.mediaItems = this.mediaItemService.getMediaItems();
    }
    
    // method to delete the media item.
    mediaItemDelete(mediaItem){
       this.mediaItemService.deleteMediaItems(mediaItem); 
    }

}