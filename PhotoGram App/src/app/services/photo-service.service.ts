import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
  cards = [];
  card;


  constructor() { 
  }
  ngOnInit(){
  }
/*
  //getting the details from the upload photo form
  photoDetails(card){
    this.card = card;
    this.cards.push(card);
  //  console.log(this.cards);
  }
  //sending the photos to cards
  sendPhoto(){
    return this.cards;
  }
*/

//Using the local storage to send and receive the data
  addPhotoCardToService(card){
    this.cards.unshift(card);
      //init a local variable
  let card1;
  if(localStorage.getItem('cards') === null){
    card1 = [];
    //Pushing the qusetion to ls
    card1.unshift(card);
    //set new array to LS
    localStorage.setItem('cards',JSON.stringify(card1));     //since the LS dont store the array format so we need to convert to string using stringfy
  }else{
    card1 = JSON.parse(localStorage.getItem('cards'));

    //Add new question
    card1.unshift(card);
    //re set local Storage 
    localStorage.setItem('cards' ,JSON.stringify(card1));

    this.cards = JSON.parse(localStorage.getItem('cards'));
  }
  }

   //Get Qusetion from LS
   getPhotoCard(){
    if(localStorage.getItem('cards') === null){
      this.cards = [];
    }else{
    //  this.questions = localStorage.getItem('questions');      // since when we take something from localStorage that will be in string format 
                                                              // and we don't need to process here as string so we convert string in array usign jsonparse
     this.cards = JSON.parse(localStorage.getItem('cards'));
    }
    return this.cards;
  }
  //Delete Photo from array
  deletePhotoCard(card){
    console.log("Deletion of the photocard")
    for(let i = 0; i < this.cards.length ; i++){
      if(card == this.cards[i])
           this.cards.splice(i,1);

           localStorage.setItem('cards', JSON.stringify(this.cards));  //this.will remove the card from the storage
    }
  }

}
