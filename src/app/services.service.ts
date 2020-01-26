import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { LoginEmp } from './login-emp';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url1= "http://b5403d09.ngrok.io/journals/login/";
  constructor(private logEmp: LoginEmp) { }
}
