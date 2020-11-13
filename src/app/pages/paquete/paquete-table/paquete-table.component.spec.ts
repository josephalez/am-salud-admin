import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTableComponent } from './paquete-table.component';

describe('PaqueteTableComponent', () => {
  let component: PaqueteTableComponent;
  let fixture: ComponentFixture<PaqueteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
