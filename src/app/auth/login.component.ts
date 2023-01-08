import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../core/services/loading.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  test() {
    this.authService.testLoading().subscribe(res => {
      console.log(res);
    });
  }

}
