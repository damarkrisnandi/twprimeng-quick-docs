import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedMenuComponent } from './categorized-menu.component';

describe('CategorizedMenuComponent', () => {
  let component: CategorizedMenuComponent;
  let fixture: ComponentFixture<CategorizedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorizedMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
