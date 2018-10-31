import { Component, OnInit, Input } from '@angular/core';
import { CampusService } from '../services/campus.service';
import { Studient } from '../Models/studient';
import { Promotion } from '../Models/promotion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit {

  @Input() promo = 0;
  @Input() studientsPerGroup: number;
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


  private mixteAndAttributGroups(promo:number, studientsPerGroup:number) {
    this.promoXMixed = this.attributGroup(this.MixtPromo(+promo), studientsPerGroup);
  }

  
  // Mixt the Studient[] and return it.
  private MixtPromo(promotion:number) {
    let promoX = this.campusService.filterPromo(promotion);
    this.promoXMixed = [];

    while (promoX.length > 0) {
      const randomChoiceIndex = (Math.random() * promoX.length - 1);
      this.promoXMixed.push(promoX.splice(randomChoiceIndex, 1)[0])
    }
    return this.promoXMixed;
  }


  /**
  * Give a group to every studients in the promotion.
  * @param promotion 
  * @param studientsPerGroup 
  */
  private attributGroup(promotion: Studient[], studientsPerGroup): Studient[] {
    let i = 0;
    let group = 1;
    promotion.forEach(studient => {
      if (i >= studientsPerGroup) {
        group++;
        i = 0;
      }
      studient.group = group;
      i++;
    });
    return promotion;
  }

}
