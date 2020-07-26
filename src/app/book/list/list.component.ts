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

  constructor(private booksService: BookService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.booksService.getAllBook().subscribe(data => {
      this.ListBook = data;
      this.bookListSearch = this.ListBook;
    });
  }

  deleteBook(index) {
    const book = this.bookListSearch[index];
    this.booksService.deleteBook(book.id).subscribe(data => {
      this.bookListSearch = this.bookListSearch.filter(t => t.id !== book.id);
      console.log(data);
    });
  }

  search(event: string) {
    this.keywordFilter = event;
    this.bookListSearch = this.keywordFilter ? this.bookfilter(this.keywordFilter) : this.ListBook;
  }

  bookfilter(keyword: string): IBook[] {
    return this.ListBook.filter((book: IBook) =>
      book.name.toLowerCase().indexOf(keyword) !== -1
    );
    // return this.ListBook.filter(function(book: IBook) {
    //   return book.name.toLowerCase().indexOf(keyword) !== -1;
    // });
  }
}
