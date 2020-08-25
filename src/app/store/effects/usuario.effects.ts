import { UsuariosService } from '../../services/usuarios.service';
import * as usuariosActions from '../actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { tap, mergeMap, map, catchError, filter } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) { }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),

      mergeMap(
        ( action ) => this.usuariosService.obtenerUsuarioById(action.id)
          .pipe(
            filter( x => x != null),
            map( usuario => {

              return usuariosActions.cargarUsuarioSuccess({ usuario: usuario});
            }),
            catchError(err => of(usuariosActions.cargarUsuarioError({ payload: err })))
          ) // fin pipe
        )// fin mergemap
      )  // fin this.actions$.pipe(
    ); // fin createEffect

}  // fin class Usuarioseffects
