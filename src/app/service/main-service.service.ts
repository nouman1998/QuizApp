import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor() { }
  public sendMessage(obj:number) {
    this.productSource.next(obj);
  }

  private productSource = new Subject<Object>();
  productMessage$ = this.productSource.asObservable();


  public sendObj(obj) {
    this.obj.next(obj);}
    private obj = new Subject();
  obj$ = this.obj.asObservable();
  
}
