import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { CustomerService } from 'src/app/customer.service';
import { Customer,Representative } from 'src/app/customer';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
  providers:[MessageService]
})
export class CommonTableComponent implements OnInit{

  products!: Product[];


  cols!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' },
          { field: {value:'quantity'}, header: 'Quant11ity' },

          
      ];
  }
}

