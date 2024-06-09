import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { SpinWheelComponent } from './spin-wheel/spin-wheel.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ZComponent } from './z/z.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RotatableCubeComponent } from './rotatable-cube/rotatable-cube.component';
import { WidgetRotatableCubeComponent } from './rotatable-cube/widget-rotatable-cube/widget-rotatable-cube.component';

@NgModule({
  declarations: [
    WidgetComponent,
    SpinWheelComponent,
    ZComponent,
    RotatableCubeComponent,
	WidgetRotatableCubeComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    CommonModule,
    MatTabsModule,
	MatSidenavModule,
	MatListModule,
	MatIconModule
  ],
  exports: [
    WidgetComponent,
    SpinWheelComponent,
    ZComponent,
	RotatableCubeComponent,
	WidgetRotatableCubeComponent
  ]
})

export class WidgetModule { }
