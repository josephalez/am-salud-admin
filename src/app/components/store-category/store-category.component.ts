import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories/categories.service';
import { AlertService } from '../../services/notifications/alert.service';

@Component({
  selector: 'store-category',
  templateUrl: './store-category.component.html',
  styleUrls: ['./store-category.component.scss']
})
export class StoreCategoryComponent implements OnInit {

  @Input() categories:any[]=[];

  @Output() reload:any= new EventEmitter;

  categoryForm:FormGroup;

  is_sub:boolean= false;

  constructor(
    private formBuilder:FormBuilder,
    private categoryService:CategoriesService,
    private alertService:AlertService,
  ) {
    this.categoryForm= this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      sub_id: [null],
    });
  }

  ngOnInit() {
  }
  
  clearValues(){
    this.categoryForm.patchValue({
      name: ['',Validators.required],
      description: [''],
      sub_id: [null],
    });
  }

  setId(){
    if(this.is_sub){
      this.is_sub=false;
      this.categoryForm.patchValue({sub_id:null});
    }
    else this.is_sub=true;
  }

  async saveCategory(){
    try {
      
      if(this.categoryForm.invalid){
        this.alertService.alertError('Rellene los campos correctamente');
        return;
      }

      console.log(this.categoryForm.value);
      
      let req = await this.categoryService.storeCategory(this.categoryForm.value);
      
      console.log(req);

      this.alertService.alertSuccess(req.message);

      this.clearValues();
      
      this.reload.emit('success');

    } catch (error) {
      
      console.log(error);

      this.alertService.alertError("Error al guardar categoría");

    }
  }

}
