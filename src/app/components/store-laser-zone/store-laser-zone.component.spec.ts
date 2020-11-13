import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLaserZoneComponent } from './store-laser-zone.component';

describe('StoreLaserZoneComponent', () => {
  let component: StoreLaserZoneComponent;
  let fixture: ComponentFixture<StoreLaserZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreLaserZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLaserZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
