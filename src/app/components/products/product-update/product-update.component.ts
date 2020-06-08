import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../templete/header/header.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router : Router ,
    private route : ActivatedRoute,
    private headerService: HeaderService,
  
    ) { 
     this.headerService.headerData = {
       icon:"update",
       routeUrl:"/products/delete",
       title:"Atualização de Produtos"


     }


   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readyById(id).subscribe( product =>{
      this.product =product


    })
  }


  updateProduct():void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMessage("Produto atualizado com sucesso");
      this.router.navigate(['/products']);

    })
  
  }

  cancel():void{
    this.router.navigate(['/products']);


  }
}
