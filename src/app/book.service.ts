import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from './ibook';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly URL = 'http://127.0.0.1:8000/api/books';

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.URL);
  }

  addBook(book: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(this.URL + '/create', book);
  }

  getBookId(id: number): Observable<IBook> {
    return this.http.get<IBook>(this.URL + '/' + id);
  }

  updateBook(book: IBook, id: number): Observable<IBook> {
    return this.http.put<IBook>(this.URL + '/' + id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }

}
