import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async validarLogin() {
    const regexUsuario = /^[a-zA-Z0-9]{3,8}$/;
    const regexPassword = /^[0-9]{4}$/;

    if (!regexUsuario.test(this.usuario)) {
      this.presentAlert('Error de Usuario', 'El usuario debe ser alfanumérico y tener entre 3 y 8 caracteres.');
      return;
    }

    if (!regexPassword.test(this.password)) {
      this.presentAlert('Error de Contraseña', 'La contraseña debe ser exclusivamente numérica de 4 dígitos.');
      return;
    }

    let navigationExtras: NavigationExtras = {
      state: { user: this.usuario }
    };

    this.router.navigate(['/home'], navigationExtras);
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}