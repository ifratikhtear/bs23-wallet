import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private busyRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() : void {
    this.busyRequestCount++;
    this.spinnerService.show();
  }

  idle() : void {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
