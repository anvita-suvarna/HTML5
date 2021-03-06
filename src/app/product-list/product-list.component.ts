import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Observable<Product[]> | any;

  constructor(private productService:ProductService,private router:Router ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.products=this.productService.getProductList();
  }

  productDetails(id:string)
  {
    this.router.navigate(['details',id]);
  }

  editProduct(id:string)
  {
    this.router.navigate(['update',id]); //navigate to component from moethod
  }

  deleteProduct(id:string) {
    this.productService.deleteproduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}