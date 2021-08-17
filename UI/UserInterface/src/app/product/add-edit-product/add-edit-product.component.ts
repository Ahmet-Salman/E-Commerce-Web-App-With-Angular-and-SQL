import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() product: any;
  Id: string = "";
  ProductName: string = "";
  Price: string = "";
  Catagory: string = "";
  Quantity: string = "";
  PhotoFileName: string = "anonymous.png";
  PhotoFilePath: string = "";

  categoryList:any=[];


  ngOnInit(): void {
    this.loadProductcatagoryList();
  }

  loadProductcatagoryList()
  {
    this.service.getAllProductCatagories().subscribe( (data:any) => {
      this.categoryList = data;
      this.Id = this.product.Id;
      this.ProductName = this.product.ProductName;
      this.Price = this.product.Price;
      this.Catagory = this.product.Catagory;
      this.Quantity = this.product.Quantity;
      this.PhotoFileName = this.product.PhotoFileName;
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    } );
  }

  addProduct()
  {
    var val = {
      Id: this.Id,
      ProductName: this.ProductName,
      Price: this.Price,
      Catagory: this.Catagory,
      Quantity: this.Quantity,
      PhotoFileName: this.PhotoFileName
    }
    this.service.addProduct(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateProduct()
  {
    var val = {
      Id: this.Id,
      ProductName: this.ProductName,
      Price: this.Price,
      Catagory: this.Catagory,
      Quantity: this.Quantity,
      PhotoFileName: this.PhotoFileName
    }
    this.service.updateProduct(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto (event: any)
  {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadPhoto (formData).subscribe( (data:any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    } );
  }

}
