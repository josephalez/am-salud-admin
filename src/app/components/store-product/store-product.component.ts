import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertService } from '../../services/notifications/alert.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.scss']
})
export class StoreProductComponent implements OnInit {

  @Input() categories:any[]=[];

  @Output() reload:any= new EventEmitter;

  selectedCategories:any[]=[];

  preview1:any=null;
  preview2:any=null;
  preview3:any=null;

  main_picture:any=null;
  picture_dos:any=null;
  picture_uno:any=null;

  productForm:FormGroup;

  constructor(
    private alertService:AlertService,
    private dom:DomSanitizer,
    private formBuilder:FormBuilder,
    private productService:ProductService,
  ) {
    this.productForm= this.formBuilder.group({
      name:['', Validators.required],
      price:[0, Validators.required],
      description:['', Validators.required],
      stock:[0, Validators.required],
    });
  }

  ngOnInit() {
  }

  clearInputs(){
    this.productForm.patchValue({
      name:'',
      price:0,
      description:'',
      stock:0,
    });

    this.preview1=null;
    this.preview2=null;
    this.preview3=null;
    this.main_picture=null;
    this.picture_dos=null;
    this.picture_uno=null;

    this.selectedCategories=[];

  }

  
  selectCategory($event){
    this.selectedCategories.push(this.categories[$event]);
  }

  quitCategory(index:any){
    this.selectedCategories.splice(index,1);
  }

  filterCategories(){
    return this.categories.filter((el)=>this.selectedCategories.find(el2=>el2.id==el.id)?false:true);
  }

  onImageChange(files:FileList, imageIndex:number=0){
    
    let file= files.item(0);

    console.log(file);

    if(!file) return;
  
    let allowedImgs=["image/jpeg", "image/png"]
    if(allowedImgs.indexOf(file.type)==-1){
      this.alertService.alertError("Asegúrese de subir una imagen válida");
      return;
    }

    let preview = this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));

    switch (imageIndex) {
      case 0:
        this.main_picture=file;
        this.preview1=preview;
        break;
      
      case 1:
        this.picture_uno=file;
        this.preview2=preview;
        break;
      
      case 2:
        this.picture_dos=file;
        this.preview3=preview;
        break;
    
      default:
        this.main_picture=file;
        this.preview1=preview;
        break;
    }

  }

  async addProduct(){
    try {

      let params= new FormData;

      if(this.productForm.invalid){
        this.alertService.alertError("Rellene todos los campos");
        return;
      }

      if(this.selectedCategories&&this.selectedCategories.length){
        params.append('categories', JSON.stringify(this.selectedCategories));
      }else{
        this.alertService.alertError('Seleccione al menos una categoría');
        return;
      }

      for(let prop in this.productForm.value){
        params.append(prop, this.productForm.value[prop]);
      }


      if(this.main_picture) params.append('main_picture', this.main_picture);
      else {
        this.alertService.alertError('Debe subir la imagen principal');
      }
      if(this.picture_uno) params.append('picture_uno', this.picture_uno);
      if(this.picture_dos) params.append('picture_dos', this.picture_dos);

      let req = await this.productService.storeProduct(params);

      console.log('product', req);

      this.alertService.alertSuccess('Producto añadido');

      this.reload.emit('ok');

      this.clearInputs()
      
    } catch (error) {
      
      console.log('err', error);

    }
  }

}
