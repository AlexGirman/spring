import { Component } from '@angular/core';
import { Model } from './repository.model';
@Component({
  selector: "app-root", templateUrl: './template.html'
})
export class DisciplineComponent {
  model: Model = new Model();
}
