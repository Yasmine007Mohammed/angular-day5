import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm !: FormGroup

  constructor(private fb: FormBuilder){

  }

  ngOnInit(){
    this.registerForm = this.fb.group({
      registerName:['',Validators.required],
      registerEmail:['',[
        Validators.required,
        Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")
      ]],
      registerUserName:['',Validators.required],
      registerPassword:['',[
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")
      ]]
    })
  }

  submitForm(){
    console.log(this.registerForm)
  }
}



