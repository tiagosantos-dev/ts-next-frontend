import { HeaderService } from './../../templete/header/header.service';
import { Product } from './../product.model';
import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    name:"",
    price:null
  }
  


  constructor(
    private ProductService : ProductService,
    private router : Router,
    private headerService: HeaderService,
  
     ) { 
      this.headerService.headerData = {
        icon:"add_shopping_cart",
        routeUrl:"/products/creat",
        title:"Cadastro de Produtos"


      }


     }

  ngOnInit(): void {
  }

  createProduct():void{
    this.ProductService.create(this.product).subscribe(()=>{
      this.ProductService.showMessage("Operação executada com sucesso")
      this.router.navigate(["/products"])


    })
    
    
  }

  cancelProduct():void{
    this.router.navigate(["/products"])



  }

}
