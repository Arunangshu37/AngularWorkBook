import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatableCubeComponent } from './rotatable-cube.component';

describe('RotatableCubeComponent', () => {
  let component: RotatableCubeComponent;
  let fixture: ComponentFixture<RotatableCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RotatableCubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotatableCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
