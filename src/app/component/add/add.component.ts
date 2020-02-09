import { Component, OnInit } from '@angular/core';
import { VocabularyService } from 'src/app/service/vocabulary.service';
import { Vocabulary } from 'src/models/Vocabulary';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newID = this.vocabularyService.vocabularies[(this.vocabularyService.vocabularies.length) - 1].id + 1;
  newEN = '';
  newVN = '';

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
  }

  addNew() {
    const Obj: Vocabulary = {
      id: this.newID,
      en: this.newEN,
      vn: this.newVN,
      memorized: false
    };
    this.vocabularyService.add(Obj);
    this.newEN = '';
    this.newVN = '';
  }
}
