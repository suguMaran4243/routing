import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public route:Router,private currentActive:ActivatedRoute)
  {

  }
  navigateToHome()
  {
    // this.route.navigate(['Home'],{relativeTo:this.currentActive})
    this.route.navigateByUrl('Home')
  }


}
