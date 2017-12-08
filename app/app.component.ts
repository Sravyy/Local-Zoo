import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'app-root',
  templateUrl:'app/app.component.html'

})

export class AppComponent {
  masterAnimalList: Animal[] = [];

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }


}
