import { Component, OnInit } from '@angular/core';
import { CampusService } from '../../services/campus.service';
import { Studient } from '../../Models/studient';
import { Promotion } from '../../Models/promotion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studients-tab',
  templateUrl: './studients-tab.component.html',
  styleUrls: ['./studients-tab.component.sass']
})
export class StudientsTabComponent implements OnInit {

  promoXMixed = new Array<Studient>();
  promos:Promotion[];
  promoSubscription:Subscription;

  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.promoSubscription = this.campusService.promoSubject.subscribe(
      (promos) => {
        this.promos = promos;
      }
    );
    this.campusService.emitPromosubject();
  }

}
