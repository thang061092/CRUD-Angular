import {Component, OnInit,} from '@angular/core';
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
  ListBook: IBook[];

  constructor(private booksService: BookService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.booksService.getAllBook().subscribe(data => {
      this.ListBook = data;
    });
  }

  deleteBook(index) {
    const book = this.ListBook[index];
    this.booksService.deleteBook(book.id).subscribe(data => {
      this.ListBook = this.ListBook.filter(t => t.id !== book.id);
      console.log(data);
    });
  }

}
