import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  username:any;
  constructor(private service:CoursesService) {
    this.service.username.subscribe(uname =>{this.username=uname})
   }

  ngOnInit() {
  }
onclicking(uname)
{
  this.service.username.next(uname.value)
}
}
