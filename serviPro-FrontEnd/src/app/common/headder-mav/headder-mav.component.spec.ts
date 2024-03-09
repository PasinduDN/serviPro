import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadderMavComponent } from './headder-mav.component';

describe('HeadderMavComponent', () => {
  let component: HeadderMavComponent;
  let fixture: ComponentFixture<HeadderMavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadderMavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadderMavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
