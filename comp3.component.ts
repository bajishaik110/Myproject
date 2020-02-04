import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
