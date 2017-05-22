import { Pipe } from '@angular/core';

@Pipe({
	name: 'categoryList'
})

export class CategoryListPipe{
	transform(mediaList){
        let finalCategories = [];
        mediaList.forEach(function(mediaItem){
            if(finalCategories.indexOf(mediaItem.category) <= -1){
                 finalCategories.push(mediaItem.category);
            }
        });

        return finalCategories.join(',');

	}
}