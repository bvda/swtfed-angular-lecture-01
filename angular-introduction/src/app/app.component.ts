import { Component, OnInit } from '@angular/core';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-introduction';

  constructor() {
    
  }
  ngOnInit() {

  }
  ngAfterViewInit(){
    let deck = new Reveal({
      plugins: [ Markdown ]
   })
   deck.initialize();
  }
}
