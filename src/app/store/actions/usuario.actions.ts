import { Usuario } from '../../models/usuario.model';
import { createAction, props } from '@ngrx/store';

export const cargarUsuario = createAction(
  '[USUARIO] Cargar usuario',
  props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[USUARIO] Cargar usuario success',
  props<{ usuario: Usuario}>()
  );

export const cargarUsuarioError = createAction(
  '[USUARIO] Cargar usuario Error',
  props<{ payload: any }>()
  );

