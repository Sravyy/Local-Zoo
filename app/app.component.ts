import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'app-root',
  template:`
  <div class="container">
  <br>
    <div class="jumbotron">Local Zoo</div>
    <h2 class="userName">Welcome, {{name}}!</h2>
      <form>
        User Name: <input [value]="name" (input)="name = $event.target.value" type="text">
      </form>
      <animal-list [animalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender) ="finishedEditing()"></edit-animal>
      <br>
      <hr>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
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
