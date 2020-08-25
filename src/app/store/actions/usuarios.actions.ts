import { Usuario } from './../../models/usuario.model';
import { createAction, props } from '@ngrx/store';

export const cargarUsuarios = createAction('[USUARIOS] Cargar usuarios');

export const cargarUsuariosSuccess = createAction(
  '[USUARIOS] Cargar usuarios success',
  props<{ us: Usuario[]}>()
  );

export const cargarUsuariosError = createAction(
  '[USUARIOS] Cargar usuarios Error',
  props<{ payload: any }>()
  );
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');
