import { Component, OnInit } from '@angular/core';
import { Vocabulary } from 'src/models/Vocabulary';
import { VocabularyService } from 'src/app/service/vocabulary.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  FilterStt = 'all';
  vocabularies: Vocabulary[];

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit() {
    this.vocabularies = this.vocabularyService.vocabularies;
  }

  deleteVocabulary(id) {
    this.vocabularyService.delete(id);
  }

  filter(memorize: boolean) {
    const xemTatCa = this.FilterStt === 'all';
    const daNho = this.FilterStt === 'remembered' && memorize;
    const chuaNho = this.FilterStt === 'not_remember' && !memorize;
    return xemTatCa || daNho || chuaNho;
  }
}
