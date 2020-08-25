import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  loading = false;
  error: any;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.store.select('usuarioSeleccionado').subscribe(
      respuesta => {
        this.usuario = respuesta.usuario;
        this.loading =  respuesta.loading;
        this.error = respuesta.error;
        console.log(respuesta);


      }
    );

    this.router.params.subscribe(

      ({ id }) => {

        this.store.dispatch(cargarUsuario({ id }));



      }

    )
  }

  ngOnDestroy(): void {
    console.log('destruido');
  }

}
