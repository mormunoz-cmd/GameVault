import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  usuarioRecibido: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private alertController: AlertController) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras.state?.['user'];
      }
    });
  }

  ngOnInit() {}

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  async mostrarInformacion() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: `Su nombre es ${this.nombre} ${this.apellido}`,
      buttons: ['Yes']
    });
    await alert.present();
  }
}