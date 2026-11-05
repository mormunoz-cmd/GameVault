import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false,
})
export class DetallePage implements OnInit {
  juego: any;

  constructor(private router: Router) {
  
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.juego = navigation.extras.state['juegoSeleccionado'];
    }
  }

  ngOnInit() {
    
    if (!this.juego) {
      this.juego = {
        titulo: 'Juego no seleccionado',
        plataforma: 'Desconocida',
        descripcion: 'No se recibieron los datos del juego.'
      };
    }
  }
}