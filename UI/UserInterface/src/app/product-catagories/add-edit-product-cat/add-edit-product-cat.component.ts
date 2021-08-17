import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-product-cat',
  templateUrl: './add-edit-product-cat.component.html',
  styleUrls: ['./add-edit-product-cat.component.css']
})
export class AddEditProductCatComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() cata: any;
  ProductCatagoryId: string = "";
  ProductCatagory: string = "";

  ngOnInit(): void {
    this.ProductCatagoryId = this.cata.ProductCatagoryId;
    this.ProductCatagory = this.cata.ProductCatagory;
  }

  addProductCatagory()
  {
    var val = {
      ProductCatagoryId: this.ProductCatagoryId,
      ProductCatagory: this.ProductCatagory
    }
    this.service.addProductCatagory(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateProductCatagory()
  {
    var val = {
      ProductCatagoryId: this.ProductCatagoryId,
      ProductCatagory: this.ProductCatagory
    }
    this.service.updateProductCatagory(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
