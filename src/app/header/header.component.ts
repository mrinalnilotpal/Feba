import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string = 'default';
  vendorName : string = '';

  constructor(private route:Router){}

  ngOnInit():void{
    this.route.events.subscribe((val:any)=>{
     
     if(val.url){
      if(localStorage.getItem('vendor') && val.url.includes('vendor')){
        console.warn('in vendor area');
        this.menuType = "vendor";
        if(localStorage.getItem('vendor')){
          let vendorStore = localStorage.getItem('vendor')
          let vendorData = vendorStore && JSON.parse(vendorStore)[0];
          this.vendorName = vendorData.name;
        }
      }
      else{
        console.warn("outside seller");
        this.menuType="default"
      }
     }
    })
  }
logout(){
  localStorage.removeItem('vendor')
  this.route.navigate(['/']) 
}
}
