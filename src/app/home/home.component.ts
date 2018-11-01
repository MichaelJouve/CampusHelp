import { Component, OnInit } from '@angular/core';
import { CampusService } from '../services/campus.service';
import { Studient } from '../Models/studient';
import { Subscription } from 'rxjs';
import { Promotion } from '../Models/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  selectedpromoID: number;
  promos: Promotion[];
  promoSubscription: Subscription;
  studientSubscription: Subscription;
  studientsData = new Array<Studient>();
  selectedPromoSubscription: Subscription;


  displayPromoForm = false;
  displayStudientForm = false;

  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.promoSubscription = this.campusService.promoSubject.subscribe(
      (promos) => {
        this.promos = promos;
      }
    );

this.selectedPromoSubscription = this.campusService.studientsubject.subscribe(
  (studients) => { this.studientsData = this.campusService.filterPromo(+this.selectedpromoID);
  });


    this.campusService.emitPromosubject();
    this.campusService.emitStudientsubject();
  }

  // Select a promo to display
  selectPromo(selectedpromoID: number) {
    this.selectedpromoID = selectedpromoID; // update last selected promo
    this.studientsData = this.campusService.filterPromo(+selectedpromoID);
  }

  // Display new promotion form
  openNewPromoForm() {
    this.displayStudientForm = false;
    this.displayPromoForm = true;
  }

  // Display new studient form
  openNewStudientForm() {
    this.displayPromoForm = false;
    this.displayStudientForm = true;
  }

  // Add a new promotion.
  addPromo(name, startyear) {
    try {
      this.campusService.addPromotion(name, startyear);
      this.displayPromoForm = false;
    } catch (error) {
      this.displayPromoForm = true;
    }
  }

  // Add new studient
  addStudient(promo, studientName: String, group?: number) {
    try {
      this.campusService.addStudient(promo.promo, studientName, group);
      this.displayPromoForm = false;
    } catch (error) {
      this.displayPromoForm = true;
    }
  }

}

