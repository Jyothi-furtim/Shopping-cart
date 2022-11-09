import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private getLoginCredUrl = 'assets/login.json';
  private getProductListUrl = 'assets/product.json'

  constructor(private http :HttpClient) {
   }


    async getLoginCred(){
    return this.http.get(this.getLoginCredUrl).toPromise();

    // getLoginCred(): Observable<any>{
    //   return this.http.get(this.getLoginCredUrl);
  }
  async getProductList(){
    return this.http.get(this.getProductListUrl).toPromise();
  } 
}
