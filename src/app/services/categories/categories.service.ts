import { Injectable } from '@angular/core';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private connectionService:ConnectionService,
  ) { }

  fetchCategories(): Promise<any> {

    return this.connectionService.getUrl('products/categroia');

  }

  selectableCategories(): Promise<any> {
    return this.connectionService.getUrl('admin/categories/select');
  }

  fetchCategoriesPaginated(page:number=1): Promise<any>{
    return this.connectionService.getUrl('admin/categories?page='+page);
  }
  
  storeCategory(params:any):Promise<any>{
    return this.connectionService.postUrl('admin/categories', params);
  }

  updateCategory(params:any,categoryId:SVGNumber):Promise<any>{
    return this.connectionService.putUrl('admin/categories/'+categoryId, params);
  }

}
