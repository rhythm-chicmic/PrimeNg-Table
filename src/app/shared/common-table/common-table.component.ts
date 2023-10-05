import { Component, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";
import { CustomerService } from 'src/app/customer.service';
import { Customer,Representative } from 'src/app/customer';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
export interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
  providers:[MessageService]
})

export class CommonTableComponent implements OnInit{

  products!: Product[];
  cols!: any[];
  cities!: City[];
  selectedCity!: City;
  

  constructor(private productService: ProductService) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);

      this.cols = [
          { field: 'code', header: 'Code',disableSort:true ,type:'text'},
          { field: 'name', header: 'Name',disableSort:false ,type:'text'},
          { field: 'category', header: 'Category',disableSort:false ,type:'text'},
          { field: 'quantity', header: 'Quantity',disableSort:false ,type:'text'},
          { field: 'dropdown', header: 'Dropdown',disableSort:true ,type:'dropdown'},
          {fields:'action', header:'Action', disableSort:true, options: ["user-edit","eye","trash"],modal:{deleteModal:true},type:'action'}
      ];
  }
}

