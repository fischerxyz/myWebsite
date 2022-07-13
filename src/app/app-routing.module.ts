import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PixelventureComponent } from './pixelventure/pixelventure.component';

const routes: Routes = [
  { path: '',   redirectTo: '/myself', pathMatch: 'full' },
  { path: '*', redirectTo: '/myself' },
  { path: 'myself', component: MainComponent },
  { path: 'pixelventure', component: PixelventureComponent },
  { path: '**', redirectTo: '/myself' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
