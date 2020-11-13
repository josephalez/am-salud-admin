import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientsTableComponent } from './expedients-table.component';

describe('ExpedientsTableComponent', () => {
  let component: ExpedientsTableComponent;
  let fixture: ComponentFixture<ExpedientsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedientsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
