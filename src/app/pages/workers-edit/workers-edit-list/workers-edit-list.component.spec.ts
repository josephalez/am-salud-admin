import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersEditListComponent } from './workers-edit-list.component';

describe('WorkersEditListComponent', () => {
  let component: WorkersEditListComponent;
  let fixture: ComponentFixture<WorkersEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
