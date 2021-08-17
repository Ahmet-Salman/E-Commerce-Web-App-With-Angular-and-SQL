import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "http://localhost:63998/api";
  readonly PhotoUrl = "http://localhost:63998/Photos/";

  constructor( private http:HttpClient ) { }

  getProductCatagoryList(): Observable<any[]>{
    return this.http.get<any>(this.ApiUrl + '/ProductCatagories');
  }

  addProductCatagory(val: any){
    return this.http.post(this.ApiUrl + '/ProductCatagories', val);
  }

  updateProductCatagory(val: any){
    return this.http.put(this.ApiUrl + '/ProductCatagories', val);
  }

  deleteProductCatagory(val: any){
    return this.http.delete(this.ApiUrl + '/ProductCatagories?ProductCatagoryId=' + val);
  }

  getProductList(): Observable<any[]>{
    return this.http.get<any>(this.ApiUrl + '/Product');
  }

  addProduct(val: any){
    return this.http.post(this.ApiUrl + '/Product', val);
  }

  updateProduct(val: any){
    return this.http.put(this.ApiUrl + '/Product', val);
  }

  deleteProduct(val: any){
    return this.http.delete(this.ApiUrl + '/Product?ProductId=' + val);
  }

  uploadPhoto(val: any){
    return this.http.post(this.ApiUrl + '/Product/SaveFile', val);
  }

  getAllProductCatagories(): Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl + '/Product/GetAllCatagories');
  }
}
