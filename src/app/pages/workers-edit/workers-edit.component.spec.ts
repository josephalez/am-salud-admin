import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersEditComponent } from './workers-edit.component';

describe('WorkersEditComponent', () => {
  let component: WorkersEditComponent;
  let fixture: ComponentFixture<WorkersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
