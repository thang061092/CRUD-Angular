import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../../ibook';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private booksService: BookService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: [''],
      category: [''],
      author: ['']
    });
  }

  addBook() {
    const book = this.addForm.value;
    this.booksService.addBook(book).subscribe(data => {
      console.log(data);
      this.router.navigate(['books']);
    });

  }

}
