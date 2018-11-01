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
  studientsData = new Array<Studient>();
  promos: Promotion[];
  promoSubscription: Subscription;


  constructor(private campusService: CampusService) { }

  ngOnInit() {
    this.promoSubscription = this.campusService.promoSubject.subscribe(
      (promos) => {
        this.promos = promos;
      }
    );
    this.campusService.emitPromosubject();

  }


  private mixteAndAttributGroups(promo: number, studientsPerGroup: number) {
    this.studientsData = this.attributGroup(this.MixtPromo(+promo), studientsPerGroup);
  }

  // Mixt the Studient[] and return it.
  private MixtPromo(promotionId: number) {
    const promoX = this.campusService.filterPromo(promotionId);
    this.studientsData = [];

    while (promoX.length > 0) {
      const randomChoiceIndex = (Math.random() * promoX.length - 1);
      this.studientsData.push(promoX.splice(randomChoiceIndex, 1)[0]);
    }
    return this.studientsData;
  }


  /**
  * Give a group to every studients in the promotion.
  *  promotion
  *  studientsPerGroup
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
