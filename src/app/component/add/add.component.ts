import { Component, OnInit } from '@angular/core';
import { VocabularyService } from 'src/app/service/vocabulary.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vocabulary } from 'src/models/Vocabulary';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  formcheck;
  newID = this.vocabularyService.vocabularies[(this.vocabularyService.vocabularies.length) - 1].id + 1;
  newEN = '';
  newVN = '';

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.formcheck = new FormGroup({
      'en': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*')
      ]),
      'vn': new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z ]*')
      ])
    });
  }

  EN() {return this.formcheck.get('en'); }
  VN() {return this.formcheck.get('vn'); }

  addNew() {
    // console.log(this.formcheck.get('en').errors);
    const Obj: Vocabulary = {
      id: this.newID,
      en: this.newEN,
      vn: this.newVN,
      memorized: false
    };

    if ((!this.EN().errors) && (!this.VN().errors)) {
      this.vocabularyService.add(Obj);
      this.EN().setValue('');
      this.VN().setValue('');
    }
  }
}
