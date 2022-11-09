import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/_services/common-service.service';
import { NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginCredList:any=[];
  loginForm:any=[];
  isLoggedIn:any = null;

  constructor(private commonService :CommonServiceService,private router: Router,) { 
    this.loginForm=[];
  }

  ngOnInit(): void {
    this.getLoginCred();
    localStorage.clear();
  }
  submitLogin(loginForm: NgForm){
    let count = 0;
    this.isLoggedIn = false;
    var data = loginForm.value;
    
    this.loginCredList.forEach((x:any) => {
      if ((x.email == data.username) && (x.password == data.password)){
        count = 1;
      }
    });
    if (count == 1){
      this.isLoggedIn = true;
      this.router.navigate(['product/product-list']);
    } else {
      this.isLoggedIn = false;
    }
    
  }
  async getLoginCred(){
    this.loginCredList = await this.commonService.getLoginCred();
  }
}

