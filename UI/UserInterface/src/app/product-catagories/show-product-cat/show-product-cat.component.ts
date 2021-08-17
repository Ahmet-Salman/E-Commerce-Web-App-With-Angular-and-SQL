import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-product-cat',
  templateUrl: './show-product-cat.component.html',
  styleUrls: ['./show-product-cat.component.css']
})
export class ShowProductCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  CatagoryList: any=[];

  ModalTitle:string ="";
  ActivateAddEditCatagory: boolean = false;
  cata: any;

  ngOnInit(): void {
    this.refreshCatagoryList();
  }

  addClick(){
    this.cata = {
      ProductCatagoryId: 0,
      ProductCatagory: ""
    }
    this.ModalTitle = "Add Product Catagory"
    this.ActivateAddEditCatagory = true;
  }

  closeClick() {
    this.ActivateAddEditCatagory = false;
    this.refreshCatagoryList();
  }

  refreshCatagoryList(){
    this.service.getProductCatagoryList().subscribe(
      data => {
        this.CatagoryList = data;
      });
  }

}
