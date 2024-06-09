import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ZComponent } from './components/widget/z/z.component';
import { SpinWheelComponent } from './components/widget/spin-wheel/spin-wheel.component';
import { WidgetComponent } from './components/widget/widget/widget.component';
import { AboutComponent } from './components/about/about.component';
import { RotatableCubeComponent } from './components/widget/rotatable-cube/rotatable-cube.component';
import { HeroComponent } from './components/hero/hero.component';


const routes: Routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{
				path: 'widgets', component: WidgetComponent,
				children: [
					{
						path: '', component: SpinWheelComponent
					},
					{
						path: 'spin-wheel', redirectTo: ''
					},
					{
						path: 'z', component: ZComponent
					},
					{
						path: 'rotatable-cube', component: RotatableCubeComponent
					}
				]
			},
			{
				path: 'about', component: AboutComponent
			},
			{
				path: '', component: HeroComponent
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
