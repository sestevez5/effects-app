import { Usuario } from './../../models/usuario.model';
import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions';

export interface UsuariosState {
  usuarios: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState =
{
  usuarios: [],
  loaded: false,
  loading: false,
  error: null
};



const _usuariosReducer = createReducer(usuariosInitialState,
  on(cargarUsuarios, state => ({...state, loading: true }) ),
  on(cargarUsuariosSuccess,

    (state, { us }) =>
      (
        {
          ...state,
        loading: false,
        loaded: true,
        usuarios: [...us]
        }
      )
    ),
     on(cargarUsuariosError,
      (state, { payload }) =>
      ({...state,
        loading: false,
        loaded: false,
        usuarios: [],
        error: payload
       }) ),

);

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
