import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortTestComponent } from './table-sort-test.component';

describe('TableSortTestComponent', () => {
  let component: TableSortTestComponent;
  let fixture: ComponentFixture<TableSortTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSortTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
