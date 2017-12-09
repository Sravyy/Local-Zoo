import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template:`
  <div class="editForm" *ngIf="childSelectedAnimal">
    <h2>Editable Details:</h2>
    <h3>Name: {{childSelectedAnimal.name}}</h3>
    <h3>Age: {{childSelectedAnimal.age}}</h3>
    <h3>Care Takers: {{childSelectedAnimal.careTakers}}</h3>
    <hr>
    <h2>Edit Animal Details:</h2>
    <label>Enter New Name:</label>
    <input [(ngModel)]="childSelectedAnimal.name"><br>
    <label>Enter New Age:</label>
    <input [(ngModel)]="childSelectedAnimal.age"><br>
    <label>Enter No. of Care Takers:</label>
    <input [(ngModel)]="childSelectedAnimal.careTakers"><br>
    <button (click)="doneButtonClicked()">Done</button>

  </div>

  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }

}
