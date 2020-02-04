import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Comp1Component } from './comp1/comp1.component';
import { ViewChild} from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,AfterViewInit {

  username:any;

  constructor(private service: CoursesService)
  {
this.service.username.subscribe(uname=>{this.username=uname})
  }
//@ViewChild('box')  child:ElementRef;

//@ViewChild(Comp1Component )  child:Comp1Component;

  ngOnInit() {
  }
onclicking(uname){
  this.service.username.next(uname.value)
  
}
ngAfterViewInit()
{

}
}
