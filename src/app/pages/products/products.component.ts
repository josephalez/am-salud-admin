import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories:any[]=[];

  products:any[]=[];

  selectedCategory:number=-1;

  currentPage:number=1;
  lastPage:number=1;

  selectedCategoryId:number=null;

  constructor(
    private productService:ProductService,
    private categoriesService: CategoriesService,
    private alertService:AlertService,
  ) { }

  async ngOnInit() {
    await this.getCategories();
  }

  async getCategories() {
    try {
        let req = await this.categoriesService.fetchCategories();
        this.categories = req.data;
        if (this.categories.length) {
            console.log("products listing", this.categories);
            await this.selectCategory(0);
        } else {
            await this.selectCategory(-1);
        }
    } catch (error) {
        this.alertService.alertError('error al obtener la lista de categorías');
    }
  }

  async selectCategory(categoryIndex:number=this.selectedCategory) {
      let categoryId = -1;
      if (categoryIndex > -1) {
          let category = this.categories[categoryIndex];
          categoryId = category.id;
      }

      this.selectedCategoryId=categoryId;
      await this.fetchProducts();
}

  async fetchProducts(page=this.currentPage){
    try {
      console.log("page number",page)
      let req = await this.productService.fetchProducts(this.selectedCategoryId, page);
      console.log(req);

      let data=req.data
      
      if(this.selectedCategoryId==-1) data=req;

      let products = data.data;
      
      if(typeof products === "object"){
        products= Object.values(products);
      }

      this.products= products;

      this.currentPage=data.current_page;
      this.lastPage=data.last_page;

    } catch (error) {
        console.log(error);
        this.alertService.alertError('error al obtener la lista de productos');
    }
  }
  
}
