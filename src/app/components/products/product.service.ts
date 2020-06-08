import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http'
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL ="http://localhost:3000/products"

  constructor(private snack : MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: Boolean = false): void{
      this.snack.open(msg,'X',{
        duration:3000,
        horizontalPosition:"right",
        verticalPosition:"top",
        panelClass: isError?['msg-error'] : ['msg-sucess']


      })
  }

  create(product: Product) :Observable<Product>{
    return this.http.post<Product>(this.baseURL,product).pipe(map(obj => obj),catchError(e=>this.errorHandler(e)))
  }




  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL).pipe(map(obj => obj),catchError(e=>this.errorHandler(e)))


  }

  readyById(id: string) : Observable<Product>{
    const url =`${this.baseURL}/${id}`
    return this.http.get<Product>(url)

  }

  update(product: Product): Observable<Product>{
    const url =`${this.baseURL}/${product.id}`
    return this.http.patch<Product>(url, product).pipe(map(obj => obj),catchError(e=>this.errorHandler(e)))

  }

  delete(id:string): Observable<Product>{
    const url= `${this.baseURL}/${id}`
    return this.http.delete<Product>(url).pipe(map(obj => obj),catchError(e=>this.errorHandler(e)))
  }


  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um Erro", true);
    return EMPTY;


  }


}
