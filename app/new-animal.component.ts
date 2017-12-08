import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'new-animal',
  template:`
  <div>
  <h1>Add New Animal</h1>
  <div>
    <label>Enter The Animal Species:</label>
    <input #species>
  </div>
  <div>
    <label>Enter The Animal Name:</label>
    <input #name>
  </div>
  <div>
    <label>Enter The Animal Age:</label>
    <input type='number' #age>
  </div>
  <div>
    <label>Enter The Animal Diet:</label>
    <input #diet>
  </div>
  <div>
    <label>Enter The Animal Location:</label>
    <input #location>
  </div>
  <div>
    <label>Enter The Number of Care Takers:</label>
    <input type="number" #careTakers>
  </div>
  <div>
    <label>Enter The Animal Sex:</label>
    <input #sex>
  </div>
  <div>
    <label>Enter The Likes of the Animal:</label>
    <input #likes>
  </div>
  <div>
    <label>Enter The DisLikes of the Animal:</label>
    <input #disLikes>
  </div>
  <br>
  <button (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, careTakers.value, sex.value, likes.value, disLikes.value); species.value=''; name.value=''; age.value=''; diet.value=''; location.value=''; careTakers.value=''; sex.value=''; likes.value=''; disLikes.value='';">Add Animal</button>
  </div>
  `

})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age:number, diet:string, location: string, careTakers: number, sex: string, likes: string, disLikes: string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, careTakers, sex, likes, disLikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

}
