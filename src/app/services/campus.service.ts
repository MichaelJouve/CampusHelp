import { Injectable, OnDestroy } from '@angular/core';
import { Studient } from '../Models/studient';
import { Promotion } from '../Models/promotion';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampusService implements OnDestroy {

  fullPromo = new Array<Studient>();
  studients: Studient[] = [
    {
      id: 1,
      name: "Damien Dubois",
      group: 1,
      promo: 1
    },
    {
      id: 2,
      name: "Nicolas",
      promo: 1
    },
    {
      id: 3,
      name: "Michaël",
      promo: 1
    },
    {
      id: 4,
      name: "Roger",
      promo: 1
    },
    {
      id: 5,
      name: "Georgette",
      group: 1,
      promo: 1
    },
    {
      id: 6,
      name: "Promo 3",
      promo: 3
    }
  ]

  private promotions: Promotion[] = [
    {
      id: 1,
      name: "1ère Valence",
      city: "Valence",
    },
    {
      id: 2,
      name: "2eme Valence",
      city: "Valence"
    },
    {
      id: 3,
      name: "3eme Valence",
    }
  ]

  promoSubject = new Subject<Promotion[]>();
  studientsubject= new Subject<Studient[]>();

  constructor() {
  }

  emitPromosubject() {
    this.promoSubject.next(this.promotions.slice());
  }
  emitStudientsubject(){
    this.studientsubject.next(this.studients.slice());
  }

  filterPromo(askedPromo: number): Studient[] {
    this.fullPromo = [];
    this.studients.forEach((data => {
      if (data.promo === askedPromo) {
        this.fullPromo.push(data);
      }
    }));
    return this.fullPromo;
  }


  addPromotion(name:String, startyear:Date) {
    let newPromo = new Promotion(name, startyear);
    this.promotions.push(newPromo);

    this.emitPromosubject(); // emit the changes
  }


  addStudient(promo:number, studientName:String, group?:number){
    let studientID = this.studients.length +1;
    let newStudient = new Studient(studientID, studientName, promo, group);
    this.studients.push(newStudient);

    this.emitStudientsubject();
  }


  ngOnDestroy(): void {
    this.promoSubject.unsubscribe;
    this.studientsubject.unsubscribe;
  }
}
