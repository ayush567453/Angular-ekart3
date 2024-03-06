import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LefttopmentComponent } from './lefttopment.component';

describe('LefttopmentComponent', () => {
  let component: LefttopmentComponent;
  let fixture: ComponentFixture<LefttopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LefttopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LefttopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
