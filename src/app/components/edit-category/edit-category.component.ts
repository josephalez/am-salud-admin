import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories/categories.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  @Input() set category(value:any){
    if(value){
      console.log('category selected', value);
      this.categoryId=value.id;
      this.editCategoryForm.patchValue(value)
    }
  }

  @Input() categories:any[]=[];

  @Output() emitReload:any=new EventEmitter;
 
  categoryId:any=null;

  editCategoryForm:FormGroup;
  
  constructor(
    private formBuilder:FormBuilder,
    private categoryService:CategoriesService,
    private alertService:AlertService
  ) {
    this.editCategoryForm= this.formBuilder.group({
      name:['',Validators.required],
      description:[''],
      sub_id:[null],
    })
  }

  ngOnInit() {
  }

  async updateCategory(){
    if(this.editCategoryForm.invalid){
      this.alertService.alertError('El nombre no puede estar vacio');
      return;
    }
    try {

      let req = await this.categoryService.updateCategory(this.editCategoryForm.value,this.categoryId);

      console.log(req);

      this.emitReload.emit();

      this.alertService.alertSuccess('La categoría se ha editado correctamente!')
      
    } catch (error) {
      
      console.log(error);

      this.alertService.alertError('Error al editar la categoría, compruebe los datos e intente nuevamente');

    }
  }

}
