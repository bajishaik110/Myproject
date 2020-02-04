import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,Validator,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { HttpClientModule } from '@angular/common/http';
import { ReversestrPipe } from './reversestr.pipe';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Comp1Component } from './about/comp1/comp1.component';
import { Comp2Component } from './about/comp2/comp2.component';
import { Comp3Component } from './about/comp3/comp3.component';
const appRoutes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',children:[
    {path:'',component:LoginComponent},
    {path:'home',  component:HomeComponent}
  ]},
  { path: "dashboard", canActivate : [AuthGuard] , component: DashboardComponent },

  {path:'home', component:HomeComponent},

    {path:'about',  component:AboutComponent },
  {path:'product',children:[
    {path:'',component:ProductComponent},
    { path:'laptop',component:LaptopComponent }
  ]},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PagenotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    LaptopComponent,
    ReversestrPipe,
    DashboardComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
