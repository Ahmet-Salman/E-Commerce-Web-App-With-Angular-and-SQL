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

  ProductCategoryIdFilter: string = "";
  ProductCategoryNameFilter: string = "";
  ProductCategoryListWithoutFilter: any = [];

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

  editClick(item: any)
  {
    this.cata = item;
    this.ModalTitle = "Edit Product Category";
    this.ActivateAddEditCatagory = true;
  }

  deleteClick(item: any)
  {
    if (confirm("Are You Sure You Want To Delete This?")){
      this.service.deleteProductCatagory(item.ProductCatagoryId).subscribe( data => {
        alert(data.toString());
        this.refreshCatagoryList();
      } );
    }
  }

  closeClick() {
    this.ActivateAddEditCatagory = false;
    this.refreshCatagoryList();
  }

  refreshCatagoryList(){
    this.service.getProductCatagoryList().subscribe(
      data => {
        this.CatagoryList = data;
        this.ProductCategoryListWithoutFilter = data;
      });
  }

  filterFunction()
  {
    var ProductCategoryIdFilter = this.ProductCategoryIdFilter;
    var ProductCategoryNameFilter = this.ProductCategoryNameFilter;

    this.CatagoryList = this.ProductCategoryListWithoutFilter.filter(function (el: any){
      return el.ProductCatagoryId.toString().toLowerCase().includes(
        ProductCategoryIdFilter.toString().trim().toLowerCase()
      ) && 
      el.ProductCatagory.toString().toLowerCase().includes(
        ProductCategoryNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop: any, asc: boolean)
  {
    this.CatagoryList = this.ProductCategoryListWithoutFilter.sort(function(a: any, b: any){
      if (asc)
      {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else
      {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    })
  }

}
