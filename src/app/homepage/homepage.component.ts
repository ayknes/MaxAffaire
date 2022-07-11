import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {
  title!: string;
  desc!: string;
  createDate!: Date;
  imageUrl!: string;


  ngOnInit() {
    this.title = 'aaaa';
    this.desc = 'bbbb';
    this.createDate = new Date();
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    

  }

}
