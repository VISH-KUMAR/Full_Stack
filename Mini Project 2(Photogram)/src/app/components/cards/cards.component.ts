import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = [];
  userName: string;
  imageAddr: string;
  capt: string;
  views: number = 0;
  likes: number = 0;
  card = '';
  noOfPhotos:number=0;
  getImage(card) {
    this.card = card;
    this.viewsIncrement(card);

  }
  constructor(
    public photoService: PhotoServiceService
  ) {}

  ngOnInit() {
    // console.log(this.photoService.sendPhoto());
    // this.cards = this.photoService.sendPhoto();     //receiving the cards data from the photoservices
    // console.log(this.cards);
    this.cards = this.photoService.getPhotoCard();
    this.noOfPhotos = this.cards.length;
  }
  viewsIncrement(card) {
    card.views = ++this.views;
  }
  likesIncrement(card) {
    card.likes = ++this.likes;
  }
  onDelete(card) {
    this.photoService.deletePhotoCard(card);
  }
}
