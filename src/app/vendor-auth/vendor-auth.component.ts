import { Component } from '@angular/core';
import { VendorsService } from '../services/vendors.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-vendor-auth',
  templateUrl: './vendor-auth.component.html',
  styleUrls: ['./vendor-auth.component.css']
})
export class VendorAuthComponent{
  
  constructor(private vendor: VendorsService, private router:Router){}
  showLogin = false;
  authError:string = ''
  ngOnInit(): void {}
  signUp(data:signUp):void{
    this.vendor.userSignUp(data)
  }
  login(data:any):void{
    //console.warn(data);
    this.vendor.userLogin(data);
    this.vendor.isLoginError.subscribe((isError)=>{
      this.authError="Email or Passoword is not correct!";
    } )
  }
  
  openLogin(){
    this.showLogin = true;
  }
  openSignUp(){
    this.showLogin = false;
  }

}
