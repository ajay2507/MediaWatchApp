import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService{

    //construtor
    constructor( private http:Http){}

	//to get all media items from the mock service
	getMediaItems(mediaItem){
        let searchParams = new URLSearchParams();
        searchParams.append('medium', mediaItem);
       return this.http.get('mediaitems', { search: searchParams })
            .map(response => {
                return response.json().mediaItems;
            });
   }

	//add new media items
	addMediaItems(mediaItem){
       return this.http.post('mediaitems',mediaItem).map(response => {

       });
	}

	//delete media items
	deleteMediaItems(mediaItem){
	  return this.http.delete(`mediaitems/${mediaItem.id}`)
      .map(response => {});
	}

   
}