import { UsuariosService } from './../../services/usuarios.service';
import * as usuariosActions from './../actions/usuarios.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) { }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),

      mergeMap(
        () => this.usuariosService.obtenerUsuarios()
          .pipe(
            map(users => {
              console.log(users)
              return usuariosActions.cargarUsuariosSuccess({ us: users });
            }),
            catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err })))
          ) // fin pipe
        )// fin mergemap
      )  // fin this.actions$.pipe(
    ); // fin createEffect

}  // fin class Usuarioseffects
