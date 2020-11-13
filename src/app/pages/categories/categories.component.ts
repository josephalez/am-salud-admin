import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  currentPage:number=1;
  lastPage:number=1;
  categories:any[]=[];
  selectedCategories:any[]=[];

  selectedCategory:any=null;

  constructor(
    private categorieService:CategoriesService,
    private alertService:AlertService,
  ) { }

  ngOnInit() {
    this.fetchCategories();
  }

  async fetchSelectableCategories(){
    try {
      let req= await this.categorieService.selectableCategories();
      console.log(req);
      this.selectedCategories= req.data;
    } catch (err) {
      console.log(err);
      this.alertService.alertError('Error al recibir la lista de categorías seleccionables');
    }
  }

  async fetchCategories(page:number=this.currentPage){
    try {
      let req= await this.categorieService.fetchCategoriesPaginated(page);
      console.log(req);
      this.currentPage=req.current_page;
      this.lastPage=req.last_page;
      this.categories=req.data;
      await this.fetchSelectableCategories()      
    } catch (err) {
      console.log(err);
      this.alertService.alertError('Error al recibir la lista de categorías');
    }
  }

  selectCategory(category){
    this.selectedCategory=category
  }

}
