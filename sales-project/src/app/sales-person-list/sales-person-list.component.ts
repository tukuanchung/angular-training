import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList : SalesPerson[] = [
    new SalesPerson("Anup","kumar", "aaa@lub2code.com", 5000),
    new SalesPerson("John","Dow","jogndow@gmail.com", 4000),
    new SalesPerson("Clair","Uan","Clair.uan@gmail.com", 90000),
    new SalesPerson("Mai","Truong", "mai.truong@luv2code.com", 60000)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
