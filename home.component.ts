import { Component, OnInit, HostListener, HostBinding } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title="Home Page";
  constructor() { }

  ngOnInit() {
  }

  @HostBinding('style.backgroundColor') bgcolor="green"
  @HostListener ('click') myclick(){
    this.bgcolor='blue';
    //alert("clicked");
  }
  @HostBinding('style.backgroundColor') backcolor
  @HostListener('mouseover') mouseover(){
    this.backcolor='solid blue';
  }
  @HostBinding('style.backgroundColor') bbcolor
  @HostListener('mouseout') mouseout(){
    this.bbcolor='pink';
  }
  submit(){
    console.log("clicked")
  }

}
