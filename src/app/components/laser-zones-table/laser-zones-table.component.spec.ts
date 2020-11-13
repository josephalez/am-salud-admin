import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserZonesTableComponent } from './laser-zones-table.component';

describe('LaserZonesTableComponent', () => {
  let component: LaserZonesTableComponent;
  let fixture: ComponentFixture<LaserZonesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserZonesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserZonesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
