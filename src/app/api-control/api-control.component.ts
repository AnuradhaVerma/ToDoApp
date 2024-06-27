import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-api-control',
  templateUrl: './api-control.component.html',
  styleUrls: ['./api-control.component.css']
})
export class ApiControlComponent implements OnInit{
  products: Product[]=[];

  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe( response=>console.log(response)
    )
    
  }
  


}
