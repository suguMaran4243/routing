import { Component } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
  constructor(public service:CoursesService,private route:Router)
  {

  }
  goToBuy(id :number)
  {
    
  this.route.navigate(['/Buy',id]);
  
  }
 

}
