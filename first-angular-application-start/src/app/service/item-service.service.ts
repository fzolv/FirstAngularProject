import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private fetchUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return this.http.get(this.fetchUrl).pipe(
      tap(data => console.log('All= '+ JSON.stringify(data))),
      catchError(err => throwError(err))
    )
  }
}
