import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupSingleColumnComponent } from './form-group-single-column.component';

describe('FormGroupSingleColumnComponent', () => {
  let component: FormGroupSingleColumnComponent;
  let fixture: ComponentFixture<FormGroupSingleColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupSingleColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupSingleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
