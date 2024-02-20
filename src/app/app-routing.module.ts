import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactComponent } from './contact/contact.component';
import { BuyComponent } from './buy/buy.component';
import { CourseGuardService } from './Services/course-guard.service';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Explore',component:ExploreComponent,canActivate:[CourseGuardService]},
  {path:'Contact',component:ContactComponent,},
  {path:'Buy/:id',component:BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
