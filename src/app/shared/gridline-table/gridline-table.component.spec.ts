import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlineTableComponent } from './gridline-table.component';

describe('GridlineTableComponent', () => {
  let component: GridlineTableComponent;
  let fixture: ComponentFixture<GridlineTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridlineTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
