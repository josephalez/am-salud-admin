import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor (
    private connectionService: ConnectionService,
  ) { }

  fetchProducts(categoryId: number=-1, page:number=1): Promise<any> {

    return this.connectionService.getUrl('products?categori_id=' + (categoryId) + '&page=' + (page) );

  }

  storeProduct(params:FormData){

    return this.connectionService.postUrl('products',params);

  }

}
