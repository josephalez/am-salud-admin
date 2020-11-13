import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeCreditComponent } from './recharge-credit.component';

describe('RechargeCreditComponent', () => {
  let component: RechargeCreditComponent;
  let fixture: ComponentFixture<RechargeCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
