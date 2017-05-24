import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {MediaItemService} from './media-item.service';

@Component({
	selector:'media-item-list',
	templateUrl:'./media-item-list.component.html',
	styleUrls:['./media-item-list.component.css']
})

export class MediaItemListComponent{
    
    mediaItems = [];
    mediaType;
    paramsSubscription;

    constructor(private mediaItemService : MediaItemService, 
        private activatedRoute: ActivatedRoute){
          
    }

    // fetching all media items
    ngOnInit(){
       this.paramsSubscription = this.activatedRoute.params
       .subscribe(params => {
           let mediaType = params['mediaType'];
           if(mediaType.toLowerCase() === 'all'){
              mediaType = "";
           }

           this.getMediaItems(mediaType);
       })
    }
    
    //finally unsubscribe the params subscription 
    ngOnDestroy(){
        this.paramsSubscription.unsubscribe();
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