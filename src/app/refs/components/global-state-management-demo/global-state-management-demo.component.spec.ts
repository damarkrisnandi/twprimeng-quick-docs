import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStateManagementDemoComponent } from './global-state-management-demo.component';

describe('GlobalStateManagementDemoComponent', () => {
  let component: GlobalStateManagementDemoComponent;
  let fixture: ComponentFixture<GlobalStateManagementDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalStateManagementDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalStateManagementDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
