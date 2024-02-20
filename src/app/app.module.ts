import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesService } from './Services/courses.service';
import { BuyComponent } from './buy/buy.component';
import { AuthService } from './Services/auth.service';
import { CourseGuardService } from './Services/course-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExploreComponent,
    ContactComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService,AuthService,CourseGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
