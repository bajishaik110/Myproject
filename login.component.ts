import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Router ,Navigation} from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ CoursesService ]
})
export class LoginComponent implements OnInit {
imageurl="../../assets/img.jpg";
login:FormGroup;

  constructor(private fb:FormBuilder,private service : CoursesService, private route:Router) { }

  ngOnInit() {
    this.login=this.fb.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10),this.nanames.bind(this)])],
      password:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.email]),this.naemail],
      number:['',Validators.compose([Validators.required])]
    })

  }
notAllowedNames=['baji','shaik'];
  msg;
    check(uname: string, p : string)
    {
      var output = this.service.checkusernameandpassword(uname, p);
      if(output == true)
      {
        this.route.navigate(['/dashboard']);
      }
      else{
  this.msg ='Invalid username or password';
      }
    }
    naemail(control:FormControl): Promise<any>  | Observable<any>{
      const myresponse=new Promise<any>((resolve,reject)=>{
        setTimeout(()=>{
        if(control.value==='bajimca1144@gmail.com'){
          resolve({'emailNotAllowed':true})
        }
        else{
          return (null)
        }
      },1500);
      
      })
    
    return myresponse;
}
nanames(control:FormControl){
  if(this.notAllowedNames.indexOf(control.value)!==-1){
return {'nameIsNotAllowed':true}
  }
  return null;
}
}
