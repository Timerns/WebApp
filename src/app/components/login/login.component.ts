import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  showPassword: boolean = false
  formError: any = false
  
  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.maxLength(256)
    ])
  })
 
  constructor() { }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
  }


  CollectLogin(){
    // if(this.loginForm.valid){
    //   this.auth.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(
    //     (res: any)=>{
    //       this.auth.setUser(res)
    //     },
    //     (err) =>{
    //       if(err.error){
    //         console.log(err.error)
    //         this.formError = err.error.msg
    //       }
    //     }
    //   );
    // }
  }
  
  ShowHidePassword(){
    this.showPassword = !this.showPassword
  }

}
