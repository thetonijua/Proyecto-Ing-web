import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({

    'email': new FormControl('',[Validators.required,Validators.email]),
    'contra' : new FormControl('',[Validators.required])
  });
  
  
  

}
