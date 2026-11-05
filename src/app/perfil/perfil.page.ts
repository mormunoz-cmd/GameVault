import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  usuario = {
    username: 'morga123',
    rol: 'Analista programador',
    juegosGuardados: 3,
    estado: 'Activo'
  };

  constructor() { }

  ngOnInit() { }
}