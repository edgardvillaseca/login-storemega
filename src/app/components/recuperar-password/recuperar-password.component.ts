import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css'],
})
export class RecuperarPasswordComponent {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private fireBaseError: FirebaseCodeErrorService
  ) {
    this.recuperarUsuario = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  recuperar() {
    const email = this.recuperarUsuario.value.correo;

    this.loading = true;

    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.toastr.info(
          'Se le envió un correo para restablecer la contraseña',
          'Recuperar password'
        );
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.fireBaseError.codeError(error.code), 'Error');
      });
  }
}
