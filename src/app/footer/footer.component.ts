import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentdate = new Date();
  currentyear = this.currentdate.getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
