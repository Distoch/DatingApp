import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any; // équivalent typescript d'une variable js oldschool

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    // Ici subscribe se surcharge avec 2 paramètres différents l'un dans le cas positif l'autre en cas d'erreur
    // Dans les 2 cas il prend en paramètre une fonction qui va lui dire quoi faire.
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => {
        this.values = response; // on parse l'observable afin de récupérer les valeurs et on l'associe à la propriété
      },
      error => {
        console.log(error); // en cas d'erreur on log juste l'erreur
      });
  }
}
