import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'app-root',
  template:`
  <div class="container">
    <h1 class="jumbotron">Local Zoo</h1>
    <h1 class="userName">Welcome, {{name}}!</h1>
      <form>
        User Name: <input [value]="name" (input)="name = $event.target.value" type="text">
      </form>
      <animal-list [animalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender) ="finishedEditing()"></edit-animal>
  </div>
  `

})

export class AppComponent {
  masterAnimalList: Animal[] = [];
  selectedAnimal = null;

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal= clickedAnimal;
  }

}
