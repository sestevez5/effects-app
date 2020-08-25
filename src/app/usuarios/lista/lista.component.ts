import { cargarUsuarios } from './../../store/actions/usuarios.actions';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];
  loading = false;
  error: any;


  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select('usuarios').subscribe(
      ({ usuarios, loading, error }) => {
        this.usuarios = usuarios;
        this.loading = loading;
        this.error = error;
      }
    )

    this.store.dispatch(cargarUsuarios())
    // this.usuarioService.obtenerUsuarios()
    //   .subscribe(
    //     usuarios =>
    //     {
    //       this.usuarios = usuarios;
    //     }
    //   );

  }

}
