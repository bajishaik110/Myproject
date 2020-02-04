import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
username:any;
  constructor(private service:CoursesService) {
    this.service.username.subscribe(uname =>{this.username=uname})
   }

  ngOnInit() {
  }
  onclicking(uname){
    this.service.username.next(uname.value)
    
  }

}
