import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrderSettleComponent } from './table-order-settle.component';

describe('TableOrderSettleComponent', () => {
  let component: TableOrderSettleComponent;
  let fixture: ComponentFixture<TableOrderSettleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOrderSettleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableOrderSettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
