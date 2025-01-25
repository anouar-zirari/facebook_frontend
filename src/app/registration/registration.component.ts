import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationRequest } from '../model/registrationRequest';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // registerForm = this.formBuilder.group({
  //   firstName: ['', Validators.required, Validators.maxLength(10)],
  //   lastName: ['', Validators.required, Validators.maxLength(10)],
  //   email: ['', Validators.required, Validators.maxLength(10)],
  //   password: ['', Validators.required,
  //     Validators.minLength(8),
  //     Validators.maxLength(20),
  //     Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]
  // })

  registerForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })


  constructor(
    private formBuilder: FormBuilder, 
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
    let registrationRequest: RegistrationRequest = new RegistrationRequest();
    registrationRequest.firstName = this.registerForm.get('firstName')?.value || '';
    registrationRequest.lastName = this.registerForm.get('lastName')?.value || '';
    registrationRequest.email = this.registerForm.get('email')?.value || '';
    registrationRequest.password = this.registerForm.get('password')?.value || '';
    
    this.registrationService.register(registrationRequest).subscribe(
      () => console.log('user registred')
    )
  }


  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');

  }
}
