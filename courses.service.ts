import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //getcourses(){ 
  //return [
   //{ name:"shaik baji",id:"1"},
  //{ name:"shaik asif",id:"2"}   ,
   //{ name:"khaliq",id:"3"},{id:"4",name:"shaffi suhan"}
  
  //]
//}
constructor(private http:HttpClient){}
product():Observable<any>{
  return this.http.get('https://jsonplaceholder.typicode.com/users')

}

checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "admin" && pwd =="admin123"){
localStorage.setItem('username',"admin");
return true;
}
else{
  return false;
}
  }
//username=new Subject<any>();
username=new BehaviorSubject('baji')
}