import { Component, OnInit } from '@angular/core';
import { Vocabulary } from 'src/models/Vocabulary';
import { VocabularyService } from 'src/app/service/vocabulary.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  vocabularies: Vocabulary[];
  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.vocabularies = this.vocabularyService.vocabularies;
  }

  deleteVocabulary(id) {
    this.vocabularyService.delete(id);
  }
}
