import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactserService {
Name;
Email;
Phone;
Message;
  constructor(
    private http: Http
  ) { }
submit(dtls){
//   var data={
//  'name':dtls.name,
//   'email':dtls.email;
//   dtls.phone;
//   dtls.message;
// }
// this.http.post(`jirt.in/svcet/xt.php?action=N&name=${this.Name}&email=${this.Email}&message=${this.Message}&phone=${this.Phone};`,'data').subscribe(
//   ()=> {},
//   err=>console.error(err)
// )




 
  
}
}
