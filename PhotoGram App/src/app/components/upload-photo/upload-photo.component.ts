import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  card = {
    userName:'',
    imageAddr:'https://placeimg.com/500/333/nature',
    capt:''
  };
  constructor( 
    private photoService:PhotoServiceService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  //sending the photo data to the Photo Services so that that data can be used by another component 
  onSubmit(){
   // this.photoService.photoDetails({userName:this.card.userName, imageAddr:this.card.imageAddr, capt:this.card.capt});
    this.photoService.addPhotoCardToService({userName:this.card.userName, imageAddr:this.card.imageAddr, capt:this.card.capt}); 
   this.router.navigate(['/dashboard']);
  }

}
