import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosTableComponent } from './nosotros-table.component';

describe('NosotrosTableComponent', () => {
  let component: NosotrosTableComponent;
  let fixture: ComponentFixture<NosotrosTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
