import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit {

  @Input() categories:any[]=[];

  @Output() selectedCategory:any=new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  selectCategory(category){
    this.selectedCategory.emit(category)
  }

}
