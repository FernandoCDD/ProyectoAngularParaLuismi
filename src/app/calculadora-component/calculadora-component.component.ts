import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-component',
  templateUrl: './calculadora-component.component.html',
  styleUrls: ['./calculadora-component.component.css']
})
export class CalculadoraComponentComponent {

  num1 = 0;
  num2 = 0;
  result = '';
  signo = '';

  agregarNumero (numero: number){

    // Esto va concatenando los numeros al resultado cada vez que pulsa un número
    this.result += numero.toString();
    this.actualizarResultado();
  }
  
  agregarDecimal(decimal: string){
    if (!this.result.includes(decimal))
      this.result += decimal;
    this.actualizarResultado();
  }

  agregarSigno(signo: string){
    this.signo = signo; // Guardamos el signo del parámetro en la variable signo
    this.result += ' '+ signo +' '; // Concatenamos el signo al resultado y le ponemos un espacio antes y después
    this.actualizarResultado();
  }

  limpiar(){
    this.result = '';
  }

  borrar(){
    this.result = this.result.slice(0, -1); // Borra el último caracter, porque empieza por 0 y acaba por el penúltimo carácter.
  }
  
  calcularResultado(){

    var resultado = this.result.split(' '); // Separa el resultado en un array, cada vez que haya un espacio entre caracteres
    // Este método quiere decir que el resultado tiene que tener 3 elementos, porque si no, no se puede calcular (num1, signo, num2)
    if (resultado.length === 3){
      this.num1 = parseInt(resultado[0]);
      this.signo = resultado[1];
      this.num2 = parseInt(resultado[2]);
      // Este if te hace la transformación de los números a enteros, porque si no, te los concatena como strings

    switch(this.signo){

      case '+':
        this.result = (this.num1 + this.num2).toString();
        break;
      case '-':
        this.result = (this.num1 - this.num2).toString();
        break;
      case '*':
        this.result = (this.num1 * this.num2).toString();
        break;
      case '/':
        this.result = (this.num1 / this.num2).toString();
        break;
    }}
    this.signo = '';
      this.num1 = parseFloat(this.result);
      this.num2 = 0;
    // Porque esto no funciona Dios?
  }

  actualizarResultado(){
    this.result = this.result.trim(); // Elimina los espacios en blanco del principio y del final
  }
}
