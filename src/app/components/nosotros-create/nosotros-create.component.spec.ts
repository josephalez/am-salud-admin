import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosCreateComponent } from './nosotros-create.component';

describe('NosotrosCreateComponent', () => {
  let component: NosotrosCreateComponent;
  let fixture: ComponentFixture<NosotrosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
