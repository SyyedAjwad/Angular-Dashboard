import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }
isActive:boolean=false;

display(){
  this.isActive = !this.isActive;
  this.router.navigateByUrl('plain-page');
}


}
