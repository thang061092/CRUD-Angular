import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  addBook() {
    const book = this.addForm.value;
    this.booksService.addBook(book).subscribe(data => {
      console.log(data);
      this.router.navigate(['books']);
    });

  }

  viewList() {
    this.router.navigate(['/books']);
  }


  get name() {
    return this.addForm.get('name');
  }

  get category() {
    return this.addForm.get('category');
  }

  get author() {
    return this.addForm.get('author');
  }
}
