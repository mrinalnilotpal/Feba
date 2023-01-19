import { Component } from '@angular/core';
import { VendorsService } from './services/vendors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private vendor: VendorsService) {

  }

  title = 'feba-ecom';

}
