import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPaginatorAndFilterComponent } from './table-with-paginator-and-filter.component';

describe('TableWithPaginatorAndFilterComponent', () => {
  let component: TableWithPaginatorAndFilterComponent;
  let fixture: ComponentFixture<TableWithPaginatorAndFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableWithPaginatorAndFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithPaginatorAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
