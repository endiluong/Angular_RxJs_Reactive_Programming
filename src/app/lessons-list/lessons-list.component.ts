import { Component, OnInit } from '@angular/core';
import { globalEventBus } from '../event-bus/bus';
import { Lesson } from '../shared/model/lesson.model';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor() {
    console.log('Lessons Lists reg as obs');
    globalEventBus.registerObserver(this);
  }
  ngOnInit() {}
  notify(data: Lesson[]) {
    console.log('Lesson List Received Data');
    this.lessons = data;
  }
}
