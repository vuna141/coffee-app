import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Sau nay se goi API (server)
  authenticate(email: string, password: string) {
    // if(email === 'vu@gmail.com' && password === '123') {
    //   localStorage.setItem('email', email)
    //   localStorage.setItem('password', password)
    //   return true
    // } 
    // else {
    //   return false
    // }
    const encode = btoa(`${email}:${password}`);
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Basic ${encode}`);
    headers = headers.set("Content-Type", "application/json");
    return this.http.post('http://lexuanquynh.com:8080/auth', {}, { headers: headers })
      .pipe(tap((res: any) => {
        localStorage.setItem('token', res.token as string)
        return res;
      }))
  }
}
