import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'app-root',
  templateUrl:'app/app.component.html'

})

export class AppComponent {
  animalList: Animal[] = [];

  addAnimal(newAnimalFromChild: Animal){
    this.animalList.push(newAnimalFromChild);
  }

}
