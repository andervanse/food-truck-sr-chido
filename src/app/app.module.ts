
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FotosComponent } from './fotos/fotos.component';
import { SobreComponent } from './sobre/sobre.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MenuService } from './services/menu.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [ 
    AppComponent,
    AppNavComponent,
    HomeComponent,
    MenuComponent,
    FotosComponent,
    SobreComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot( appRoutes, { useHash: true } ),        
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
