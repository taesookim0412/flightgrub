import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-food-admin',
  templateUrl: './food-admin.component.html',
  styleUrls: ['./food-admin.component.scss']
})
export class FoodAdminComponent implements OnInit {
loginForm = new FormGroup({
  user: new FormControl('', Validators.required),
  pass: new FormControl('', Validators.required)
});
formC = this.loginForm['controls'];
  constructor(private _http: HttpService) { }

  ngOnInit() {
  }
  login(){
    let user = this.formC['user'];
    let pass = this.formC['pass'];
    // this._http.
  }
}
