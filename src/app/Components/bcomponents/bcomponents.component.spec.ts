import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponentsComponent } from './bcomponents.component';

describe('BComponentsComponent', () => {
  let component: BComponentsComponent;
  let fixture: ComponentFixture<BComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
