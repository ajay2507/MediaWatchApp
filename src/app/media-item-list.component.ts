import {Component} from '@angular/core';
import {MediaItemService} from './media-item.service';

@Component({
	selector:'media-item-list',
	templateUrl:'./media-item-list.component.html',
	styleUrls:['./media-item-list.component.css']
})

export class MediaItemListComponent{
    
    mediaItems;
    mediaType;
    constructor(private mediaItemService : MediaItemService){
          
    }

    // fetching all media items
    ngOnInit(){
       this.getMediaItems(this.mediaType);
    }
    
    // method to delete the media item.
    mediaItemDelete(mediaItem){

       this.mediaItemService.deleteMediaItems(mediaItem).subscribe(
           () => { this.getMediaItems(this.mediaType);}); 
    }

    getMediaItems(mediaType){
        this.mediaType = mediaType;
        this.mediaItemService.getMediaItems(mediaType).subscribe(
            mediaItems => {
                this.mediaItems = mediaItems;
            })
    }

}