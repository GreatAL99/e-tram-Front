import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsComponent } from './stations/stations.component';
import { EditStationComponent } from './edit-station/edit-station.component';
import { HorairesComponent } from './horaires/horaires.component';
import { NouveauHoraireComponent } from './nouveau-horaire/nouveau-horaire.component';
import { EditHoraireComponent } from './edit-horaire/edit-horaire.component';
import { NouveauStationComponent } from './nouveau-station/nouveau-station.component';
import { TramComponent } from './tram/tram.component';
import { NouveauTramComponent } from './nouveau-tram/nouveau-tram.component';
import { EditTramComponent } from './edit-tram/edit-tram.component';
import { VoyageComponent } from './voyage/voyage.component';
import { NouveauVoyageComponent } from './nouveau-voyage/nouveau-voyage.component';
import { EditVoyageComponent } from './edit-voyage/edit-voyage.component';
import { VoyageursComponent } from './voyageurs/voyageurs.component';
import { EditNombreTicketsComponent } from './edit-nombre-tickets/edit-nombre-tickets.component';
import { TicketsComponent } from './tickets/tickets.component';
import { EditPrixComponent } from './edit-prix/edit-prix.component';
import { SoldesComponent } from './soldes/soldes.component';
import { ResponsablesGComponent } from './responsables-g/responsables-g.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { ProfilComponent } from './profil/profil.component';

import { DisplayHoraireComponent } from './display-horaire/display-horaire.component';
import { OffresComponent } from './offres/offres.component';
import { DepensesComponent } from './depenses/depenses.component';
import { VoyageurLayoutComponent } from './voyageur-layout/voyageur-layout.component';
import { AlimenterComponent } from './alimenter/alimenter.component';
import { ResGuichetLayoutComponent } from './res-guichet-layout/res-guichet-layout.component';
import { ValiderTicketComponent } from './valider-ticket/valider-ticket.component';


const routes: Routes = [

  {
    path:'',
    component:DefaultLayoutComponent,
    children:[{
      path:'',
      component:HomePageComponent
    },{
      path:'login',
      component:LoginComponent
    },{
      path:'register',
      component:RegisterComponent
    },{
      path:'consulterHoraires',
      component:DisplayHoraireComponent
    },{
      path:'offres',
      component:OffresComponent
    }
  ]
  },
  {
    path:"" , redirectTo:"/" , pathMatch:'full'
  },
  {
    path:'',
    component: VoyageurLayoutComponent,
    children:[
      {
        path:"depenses",component:DepensesComponent,canActivate:[AuthGaurdService]
      }]
  },
  {
    path:'',
    component: ResGuichetLayoutComponent,
    children:[
      {
        path:"alimenter",component:AlimenterComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"valider",component:ValiderTicketComponent,canActivate:[AuthGaurdService]
      }
    ]
  },
  {path:'',
  component:AdminLayoutComponent,
  children:[
    {
      path:"logout",component:LogoutComponent,canActivate:[AuthGaurdService]
    },
      {
        path:"stations",component:StationsComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"nouveau-station",component:NouveauStationComponent,canActivate:[AuthGaurdService]
      },
    /* {
        path:"" , redirectTo:"/stations" , pathMatch:'full'
      },*/
      {
        path:"edit-station/:id",component:EditStationComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"horaires",component:HorairesComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"nouveau-horaire",component:NouveauHoraireComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"edit-horaire/:id",component:EditHoraireComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"trams",component:TramComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"nouveau-tram",component:NouveauTramComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"edit-tram/:id",component: EditTramComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"voyages",component:VoyageComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"nouveau-voyage",component:NouveauVoyageComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"edit-voyage/:id",component: EditVoyageComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"voyageurs",component:VoyageursComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"edit-nombre-tickets",component: EditNombreTicketsComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"tickets",component:TicketsComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"edit-prix",component: EditPrixComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"soldes",component:SoldesComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"responsables-g",component:ResponsablesGComponent,canActivate:[AuthGaurdService]
      },
      {
        path:"profil",component:ProfilComponent,canActivate:[AuthGaurdService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
