import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList: any=[];

  ModalTitle:string ="";
  ActivateAddEditProduct: boolean = false;
  product: any;

  ngOnInit(): void {
    this.refreshProductList();
  }

  addClick(){
    this.product = {
      Id: 0,
      ProductName: "",
      Price: 0,
      Catagory: "",
      Quantity: 0,
      PhotoFileName: "anonymous.png"
    }
    this.ModalTitle = "Add Product"
    this.ActivateAddEditProduct = true;
  }

  editClick(item: any)
  {
    this.product = item;
    this.ModalTitle = "Edit Product";
    this.ActivateAddEditProduct = true;
  }

  deleteClick(item: any)
  {
    if (confirm("Are You Sure You Want To Delete This?")){
      this.service.deleteProduct(item.Id).subscribe( data => {
        alert(data.toString());
        this.refreshProductList();
      } );
    }
  }

  closeClick() {
    this.ActivateAddEditProduct = false;
    this.refreshProductList();
  }

  refreshProductList(){
    this.service.getProductList().subscribe(
      data => {
        this.ProductList = data;
      });
  }
}
