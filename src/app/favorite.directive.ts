/* Custom directive */
import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
 	selector: '[mediaFavourite]'
})

export class FavoriteDirective{
    @HostBinding('class.is-favorite') isFavorite = true;
    @HostBinding('class.is-favorite-hovering') hovering = false;
     
    //apply class is-favorite-hovering on mouse over
    @HostListener('mouseenter') mouseEnter(){
        this.hovering = true;
    }
    
    //remove class is-favorite-hovering on mouse leave
    @HostListener('mouseleave') mouseLeave(){
    	this.hovering = false;
    }
    
    //setting the isFavorite value dynamically
    @Input() set mediaFavourite(value){
    	this.isFavorite = value;
    }

} 