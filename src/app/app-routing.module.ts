import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { KioskComponent } from './kiosk/kiosk.component';

const routes: Routes = [
  {path: '', redirectTo: 'kiosk', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'kiosk', component: KioskComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
