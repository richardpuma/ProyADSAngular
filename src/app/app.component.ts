import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyADSAngular';
  subtitulo = 'este es un subtitulo';
  nombre = 'richard desde github';
  radio = 'nueva q desde master';

  obtenerRadio(){
    var nombreRadio = 'romantica desde master';
    var nombreRadioInternacional = 'radio españa';
  }
  apellido ='cambio en rama develop';

  esteEsUnMetodo(){
    var varLocal = 'variable local desde develop':
  }
}
