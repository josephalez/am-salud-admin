import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserZonesComponent } from './laser-zones.component';

describe('LaserZonesComponent', () => {
  let component: LaserZonesComponent;
  let fixture: ComponentFixture<LaserZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
