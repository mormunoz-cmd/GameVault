
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: false,
})
export class CatalogoPage implements OnInit {
  juegos = [
    { id: 1, titulo: 'Honkai: Star Rail', plataforma: 'PC / Móvil', descripcion: 'RPG táctico de exploración espacial y combate por turnos.' },
    { id: 2, titulo: 'Uma Musume Pretty Derby', plataforma: 'Móvil', descripcion: 'Simulación de entrenamiento de chicas caballo con mecánicas de estrategia.' },
    { id: 3, titulo: 'Yu-Gi-Oh! Duel Links', plataforma: 'Switch / PC / Móvil', descripcion: 'Juego de cartas coleccionables con variados métodos de invocación y estrategias.' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  verDetalle(juego: any) {
    let navigationExtras: NavigationExtras = {
      state: { juegoSeleccionado: juego }
    };
    this.router.navigate(['/detalle'], navigationExtras);
  }
}