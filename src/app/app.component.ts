import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl,FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mail';

  loginform = new FormGroup({
    FirstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    LastName:new FormControl(''),
    Phone: new FormControl('',[Validators.required,Validators.minLength(10)]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    Gender:new FormControl(''),
    State:new FormControl(''),
  })
get FirstName(){
  return this.loginform.get('FirstName');
}
get Phone(){
  return this.loginform.get('Phone');
}
get Email(){
  return this.loginform.get('Email');
}
get Password(){
  return this.loginform.get('Password');
}

onSubmit(){
  console.log('valid?',this.loginform.valid);
  console.log(this.loginform.value);
}
}
