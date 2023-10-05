import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-gridline-table',
  templateUrl: './gridline-table.component.html',
  styleUrls: ['./gridline-table.component.scss']
})
export class GridlineTableComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }

}
