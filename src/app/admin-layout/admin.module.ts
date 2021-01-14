import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsComponent } from '../stations/stations.component';
import { HorairesComponent } from '../horaires/horaires.component';
import { VoyageComponent } from '../voyage/voyage.component';
import { TramComponent } from '../tram/tram.component';
import { TicketsComponent } from '../tickets/tickets.component';
import { SoldesComponent } from '../soldes/soldes.component';
import { EditHoraireComponent } from '../edit-horaire/edit-horaire.component';
import { EditNombreTicketsComponent } from '../edit-nombre-tickets/edit-nombre-tickets.component';
import { EditPrixComponent } from '../edit-prix/edit-prix.component';
import { EditStationComponent } from '../edit-station/edit-station.component';
import { EditTramComponent } from '../edit-tram/edit-tram.component';
import { EditVoyageComponent } from '../edit-voyage/edit-voyage.component';
import { NouveauHoraireComponent } from '../nouveau-horaire/nouveau-horaire.component';
import { NouveauStationComponent } from '../nouveau-station/nouveau-station.component';
import { NouveauTramComponent } from '../nouveau-tram/nouveau-tram.component';
import { NouveauVoyageComponent } from '../nouveau-voyage/nouveau-voyage.component';
import { ResponsablesGComponent } from '../responsables-g/responsables-g.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminLayoutComponent } from './admin-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgChartjsModule } from 'ng-chartjs';
import { ChartsModule } from 'ng2-charts';
import { VoyageursComponent } from '../voyageurs/voyageurs.component';
import { SharedModule } from '../footer/shared.module';
import { ProfilComponent } from '../profil/profil.component';
import { ValiderTicketComponent } from '../valider-ticket/valider-ticket.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    StationsComponent,
    HorairesComponent,
    VoyageComponent,
    TramComponent,
    TicketsComponent,
    VoyageursComponent,
    SoldesComponent,
    EditHoraireComponent,
    EditNombreTicketsComponent,
    EditPrixComponent,
    EditStationComponent,
    EditTramComponent,
    EditVoyageComponent,
    NouveauHoraireComponent,
    NouveauStationComponent,
    NouveauTramComponent,
    NouveauVoyageComponent,
    ResponsablesGComponent,
    ProfilComponent,
    ValiderTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartjsModule,
    ChartsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class AdminModule { }
