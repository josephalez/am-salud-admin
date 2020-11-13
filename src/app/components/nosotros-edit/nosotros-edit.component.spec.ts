import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosEditComponent } from './nosotros-edit.component';

describe('NosotrosEditComponent', () => {
  let component: NosotrosEditComponent;
  let fixture: ComponentFixture<NosotrosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
