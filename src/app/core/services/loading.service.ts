import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private busyRequestCount = 0;

  constructor() { }

  busy(){
    this.busyRequestCount++;
    // this.spinnerService.show();
  }

  idle(){
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0)
    {
      this.busyRequestCount = 0;
      // this.spinnerService.hide();
    }
  }
}
