import { HeaderService } from './../../components/templete/header/header.service';

import { ProductService } from './../../components/products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService : HeaderService) {
    headerService.headerData={
      title: " Início",
      icon:"home",
      routeUrl:""

    }



   }




  ngOnInit(): void {
  
  }


}
