import { Routes, RouterModule } from '@angular/router'

import { MediaItemFormComponent } from './media-item-form.component'

const appRoutes: Routes = [
 { path: 'add', component : MediaItemFormComponent },
 { path: ':mediaType', component: MediaItemFormComponent},
 { path: '', pathMatch: 'full', redirectTo: 'all'}
 ];

 export const routing = RouterModule.forRoot(appRoutes);