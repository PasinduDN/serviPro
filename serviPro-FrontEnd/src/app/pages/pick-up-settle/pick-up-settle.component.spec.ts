import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpSettleComponent } from './pick-up-settle.component';

describe('PickUpSettleComponent', () => {
  let component: PickUpSettleComponent;
  let fixture: ComponentFixture<PickUpSettleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickUpSettleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickUpSettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
