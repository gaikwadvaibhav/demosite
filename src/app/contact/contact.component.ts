import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactserService } from 'app/netservices/contactser.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dtFrm = {
    name: '',
    email: '',
    phone: '',
    message:''
  };
  constructor(
    private ser:ContactserService
  ) { }

  ngOnInit() {
  }
  onFrmSub(myFrm?: NgForm) {
    
   
    this.ser.submit(myFrm.form.value);
    console.log(this.dtFrm);
  }

}
