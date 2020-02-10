import { Injectable } from '@angular/core';
import { Vocabulary } from 'src/models/Vocabulary';

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {

  vocabularies: Vocabulary[] = [
    {
      id: 1,
      en: 'action',
      vn: 'hành động',
      memorized: true
    },
    {
      id: 2,
      en: 'angle',
      vn: 'góc',
      memorized: false
    },
    {
      id: 3,
      en: 'ant',
      vn: 'con kiến',
      memorized: false
    },
    {
      id: 4,
      en: 'art',
      vn: 'nghệ thuật',
      memorized: true
    },
    {
      id: 5,
      en: 'arch',
      vn: 'vòm, hình vòng cung',
      memorized: false
    },
    {
      id: 6,
      en: 'back',
      vn: 'lưng, đằng sau',
      memorized: true
    },
    {
      id: 7,
      en: 'basin',
      vn: 'lưu vực, vịnh nhỏ',
      memorized: false
    },
    {
      id: 8,
      en: 'bell',
      vn: 'cái chuông',
      memorized: true
    },
    {
      id: 9,
      en: 'body',
      vn: 'cơ thể',
      memorized: true
    },
    {
      id: 10,
      en: 'brake',
      vn: 'hệ thống phanh',
      memorized: false
    }
  ];
  constructor() { }

  delete(id) {
    const index = this.vocabularies.findIndex(item => item.id === id);
    this.vocabularies.splice(index, 1);
  }

  add(newObj) {
    this.vocabularies.push(newObj);
  }
}
