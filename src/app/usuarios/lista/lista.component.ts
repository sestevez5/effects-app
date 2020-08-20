import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];
  constructor( private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios()
      .subscribe(
        usuarios =>
        {
          this.usuarios = usuarios;
        }
      );

  }

}
