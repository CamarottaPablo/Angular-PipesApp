import { Component, ResolvedReflectiveFactory } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre : string = 'Pablo';
  genero : string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Jorge', 'Nina'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Nina',
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop();  
  }

// Key Value Pipe
  persona = {
    nombre: 'Pablo',
    edad: 35,
    direccion: 'Buenos Aires, Argentina'
  }
//Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ]

//Async Pipe
  miObservable = interval(5000); // 0, 1, 2, 3, 4, 5, 6

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' )
    }, 3500 );
  });

}
