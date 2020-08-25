import { cargarUsuarioSuccess } from './../actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';
import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuariosSuccess } from '../actions';

export interface UsuarioState {
  id: string;
  usuario: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState =
{
  id: null,
  usuario: null,
  loaded: false,
  loading: false,
  error: null
};



const _usuarioReducer = createReducer(usuarioInitialState,
  on(cargarUsuario, (state, { id }) => ({
      ...state,
      loading: true,
      id: id
    })
  ),
  on(cargarUsuarioSuccess,

    (state, { usuario }) =>
      (
        {
          ...state,
          loading: false,
          loaded: true,
          usuario: { ...usuario }
        }
      )
  ),


     on(cargarUsuarioError,
      (state, { payload }) =>
      ({...state,
        loading: false,
        loaded: false,
        usuario: null,
        error: payload
       }) ),

);

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
