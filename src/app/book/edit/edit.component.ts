import {Component, OnInit} from '@angular/core';
import {IBook} from '../../ibook';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  book: IBook;
  updateForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private booksService: BookService) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      name: [''],
      category: [''],
      author: ['']
    });
    this.booksService.getBookId(this.id).subscribe(data => {
      this.book = data;
      this.updateForm.patchValue(this.book);
    });
  }

  updateBook() {
    const book = this.updateForm.value;
    this.booksService.updateBook(book, this.id).subscribe(res => {
      this.router.navigate(['/books']);
      console.log(res);
    });
  }

  viewList() {
    this.router.navigate(['/books']);
  }

}
