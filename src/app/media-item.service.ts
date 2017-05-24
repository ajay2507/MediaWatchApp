import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService{

    //construtor
    constructor( private http:Http){}

	//to get all media items from the mock service
	getMediaItems(){
       return this.http.get('mediaitems').map(response => {
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

    //Initial list of movies
	mediaItems = [
        {
            id: 1,
            name: "Firebug",
            medium: "Series",
            category: "Science Fiction",
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: "The Small Tall",
            medium: "Movies",
            category: "Comedy",
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: "The Redemption",
            medium: "Movies",
            category: "Action",
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: "Hoopers",
            medium: "Series",
            category: "Drama",
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: "Happy Joe: Cheery Road",
            medium: "Movies",
            category: "Action",
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        }
    ];
}