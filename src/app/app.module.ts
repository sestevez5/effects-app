import { EffectsArray } from './store/effects/index';
import { UsuariosEffects } from './store/effects/usuarios.effects';
import { environment } from './../environments/environment.prod';
import { appReducers } from './store/app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule} from '@ngrx/effects';



import { AppRoutingModule } from './app-routing.module';

// Módulos de la aplicación
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 25,
        logOnly: environment.production,
      }
    ),
    EffectsModule.forRoot(EffectsArray)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
