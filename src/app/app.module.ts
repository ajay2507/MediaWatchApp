import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemFormComponent } from './media-item-form.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

import { MediaItemService } from './media-item.service';

import { lookupLists, lookupListToken } from './media-providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './media.routing';


@NgModule({
  //include all components, directives & pipes
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    MediaItemFormComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
  MediaItemService,
  { provide: lookupListToken, useValue : lookupLists },
  { provide: XHRBackend, useClass: MockXHRBackend}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
