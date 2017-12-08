import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'animal-list',
  template:`
  <div class="animalList">
    <ol>

        -----------
      <li *ngFor="let currentAnimal of animalList">
        Species: '{{currentAnimal.species}}'<br>
        Name : '{{currentAnimal.name}}'<br>
        Age: '{{currentAnimal.age}}'<br>
        Diet: '{{currentAnimal.diet}}'<br>
        Location: '{{currentAnimal.location}}'<br>
        CareTakers: '{{currentAnimal.careTakers}}'<br>
        Sex: '{{currentAnimal.sex}}'<br>
        Likes: '{{currentAnimal.likes}}'<br>
        DisLikes: '{{currentAnimal.disLikes}}'<br>
        ------------
        <br>
        <br>
        
      </li>
    </ol>
  </div>
  `
})

export class AnimalListComponent{
  @Input() animalList: Animal[];


}
