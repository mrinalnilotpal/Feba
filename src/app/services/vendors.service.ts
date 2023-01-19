import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'
import { login } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {
  isVendorLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: any) {
    this.http.post('http://localhost:3000/vendor',
      data, { observe: 'response' })
      .subscribe((result) => {
        this.isVendorLoggedIn.next(true);
        localStorage.setItem('vendor', JSON.stringify(result.body));
        this.router.navigate(['vendor-home']);
      });
  }
  reloadVendor() {
    if (localStorage.getItem('vendor')) {
      this.isVendorLoggedIn.next(true);
      this.router.navigate(['vendor-home']);
    }
  }
  userLogin(data: any) {
    console.warn(data)
    this.http.get(`http://localhost:3000/vendor?email=${data.email}&password=${data.password}`,
    {observe:'response'})
    .subscribe((result:any)=>{
      console.warn(result);
      if(result && result.body && result.body.length){
        console.warn("user logged in")
        this.isVendorLoggedIn.next(true);
        this.router.navigate(['vendor-home']);
      }
      else{
        console.warn("logged failed!")
        this.isLoginError.emit(true)
      }
    })
  }
}
