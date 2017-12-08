import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'animal-list',
  template:`
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="young">Young Animals</option>
    <option value="mature" >Old Animals</option>
  </select>

  <div class="animalList">
    <ol>
        -----------
      <li *ngFor="let currentAnimal of animalList | age:filteredByAge">
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
  filteredByAge: string ="allAnimals";

  onChange(optionFromMenu) {
      this.filteredByAge = optionFromMenu;
  }

}
