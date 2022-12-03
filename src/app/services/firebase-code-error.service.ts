import { Injectable } from '@angular/core';
import { FireBaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root',
})
export class FirebaseCodeErrorService {
  constructor() {}

  codeError(code: string) {
    switch (code) {
      //El correo ya existe
      case FireBaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      //Contraseña débil
      case FireBaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy débil';

      //Correo inválido
      case FireBaseCodeErrorEnum.InvalidEmail:
        return 'Correo inválido';

      //Contraseña incorrecta
      case FireBaseCodeErrorEnum.WrongPassword:
        return 'Contraseña incorrecta';

      //Usuario no encontrado
      case FireBaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';

      default:
        return 'Error desconocido';
    }
  }
}
