import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-se-presenter',
  templateUrl: './se-presenter.component.html',
  styleUrls: ['./se-presenter.component.css']
})
export class SePresenterComponent implements OnInit {

  sePresenterForm: FormGroup;
  genres: string[] = ['Masculin', 'Féminin'];

  constructor() {
  }

  ngOnInit() {
    this.sePresenterForm = new FormGroup({
      'prenom': new FormControl(null, Validators.required),
      'nom': new FormControl(null, Validators.required),
      'surnom': new FormControl(null, Validators.required),
      'genre': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
  }
}
