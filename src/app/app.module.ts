import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DefaultModuleModule } from './default-layout/default-module.module';
import { AdminModule } from './admin-layout/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DefaultModuleModule,
    AdminModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
