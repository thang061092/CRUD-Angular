import {Component, OnInit} from '@angular/core';
import {IBook} from '../../ibook';
import {BookService} from '../../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'Danh sách';
  ListBook: IBook[] = [];
  keywordFilter = '';
  bookListSearch: IBook[];
  message: string = '';

  constructor(private booksService: BookService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this.booksService.getAllBook().subscribe(data => {
      this.ListBook = data;
      this.bookListSearch = this.ListBook;
    });
  }

  deleteBook(index) {
    const book = this.bookListSearch[index];
    if (confirm('You are sure')) {
      this.booksService.deleteBook(book.id).subscribe(data => {
        alert(this.message = 'Delete success!');
        this.index();
      });
    }
  }

  search(event: any) {
    this.keywordFilter = event.target.value.toLowerCase();
    this.bookListSearch = this.keywordFilter ? this.bookFilter(this.keywordFilter) : this.ListBook;
  }

  bookFilter(keyword: string): IBook[] {
    return this.ListBook.filter((book: IBook) =>
      book.name.toLowerCase().indexOf(keyword) !== -1
    );
  }

}
