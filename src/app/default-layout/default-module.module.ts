import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../footer/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayHoraireComponent } from '../display-horaire/display-horaire.component';
import { OffresComponent } from '../offres/offres.component';
import { DepensesComponent } from '../depenses/depenses.component';
import { HeaderVComponent } from '../header-v/header-v.component';
import { VoyageurLayoutComponent } from '../voyageur-layout/voyageur-layout.component';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartsModule } from 'ng2-charts';
import { AlimenterComponent } from '../alimenter/alimenter.component';
import { HeaderRComponent } from '../header-r/header-r.component';
import { ResGuichetLayoutComponent } from '../res-guichet-layout/res-guichet-layout.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    DisplayHoraireComponent,
    OffresComponent,
    DepensesComponent,
    HeaderVComponent,
    VoyageurLayoutComponent,
    AlimenterComponent,
    HeaderRComponent,
    ResGuichetLayoutComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule,
    NgChartjsModule,
    ChartsModule,
    CommonModule
  ]
})
export class DefaultModuleModule { }
