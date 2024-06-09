import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRotatableCubeComponent } from './widget-rotatable-cube.component';

describe('WidgetRotatableCubeComponent', () => {
  let component: WidgetRotatableCubeComponent;
  let fixture: ComponentFixture<WidgetRotatableCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetRotatableCubeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetRotatableCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
