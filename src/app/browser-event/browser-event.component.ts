import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event',
  templateUrl: './browser-event.component.html',
  styleUrls: ['./browser-event.component.css']
})
export class BrowserEventComponent implements OnInit {
  hoverSection: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  unsubscire() {
    console.log('CALL UNSB');
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }
}
function onMouseMove(ev: MouseEvent) {
  console.log(ev);
}
