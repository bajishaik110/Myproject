import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  course
    constructor(private service:CoursesService){

    }

  ngOnInit() {
    this.service.product().subscribe(productdata =>this.course=productdata)
  }

}
