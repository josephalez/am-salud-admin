import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPedidoComponent } from './detailed-pedido.component';

describe('DetailedPedidoComponent', () => {
  let component: DetailedPedidoComponent;
  let fixture: ComponentFixture<DetailedPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
