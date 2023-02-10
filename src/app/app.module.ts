import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KioskComponent } from './kiosk/kiosk.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClientModule } from '@angular/common/http';
import { ItemModalComponent } from './item-modal/item-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    KioskComponent,
    DropdownComponent,
    SigninComponent,
    AdminComponent,
    ItemModalComponent
    
  ],
  
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
