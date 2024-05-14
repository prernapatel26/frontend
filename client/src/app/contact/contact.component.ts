import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactusForm !: FormGroup;
  constructor(private formBuilder: FormBuilder , private http:HttpClient , private router:Router) {

  }

  ngOnInit():void{
    this.contactusForm=this.formBuilder.group({
      name:[''],
      email:[''],
      message:['']
    })
  }

  contactUs(){
    this.http.post<any>("http://localhost:3000/contactus",this.contactusForm.value)
    .subscribe (res=>{
      alert("Data successfully submitted");
      this.contactusForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong");
    })
  }
}
