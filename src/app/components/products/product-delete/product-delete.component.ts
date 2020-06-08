import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HeaderService } from '../../templete/header/header.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private ProductService: ProductService,
    private Router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService,
  
     ) { 
      this.headerService.headerData = {
        icon:"delete",
        routeUrl:"/products/delete",
        title:"Exclusão de Produtos"


      }


    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readyById(id).subscribe(( product) => {
     this.product = product

    })

  }

  cancel(): void {
    this.Router.navigate(['/products'])


  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.delete(id).subscribe(() => {
      this.ProductService.showMessage("deletado com sucesso")
      this.Router.navigate(['/products'])

    })

  }

}
