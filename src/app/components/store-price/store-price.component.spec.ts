import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePriceComponent } from './store-price.component';

describe('StorePriceComponent', () => {
  let component: StorePriceComponent;
  let fixture: ComponentFixture<StorePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
