
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
import { MatButtonModule, MatIconModule, MatListModule, MatGridListModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import { FotosComponent } from './fotos/fotos.component';
import { SobreComponent } from './sobre/sobre.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CardapioService } from './services/cardapio.service';
import { HttpClientModule } from '@angular/common/http';
import { EditarCardapioComponent } from './cardapio/editar/editar-cardapio.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CardapioEditarDialogComponent } from './cardapio/editar-dialog/cardapio-editar-dialog.component';
import { CardapioExcluirDialogComponent } from './cardapio/excluir-dialog/cardapio-excluir-dialog.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },  
  { path: 'fotos', component: FotosComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'cardapio-editar', component: EditarCardapioComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [ 
    AppComponent,
    AppNavComponent,
    HomeComponent,
    CardapioComponent,
    FotosComponent,
    SobreComponent,
    AgendaComponent,
    EditarCardapioComponent,
    LoginComponent,
    CardapioEditarDialogComponent,
    CardapioExcluirDialogComponent
  ],
  entryComponents: [
    CardapioEditarDialogComponent, 
    CardapioExcluirDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot( appRoutes, { useHash: true } )    
  ],
  providers: [
    CardapioService, 
    AuthService, 
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
