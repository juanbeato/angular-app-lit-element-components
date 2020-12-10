import { Component, OnInit } from '@angular/core';
import '@juanbeato/jb-header';
import '@juanbeato/jb-product-card';
import '@polymer/iron-image/iron-image.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestedItems: Object[];

  constructor() { }

  ngOnInit(): void {
    this.latestedItems = [
      {
        image: 'https://picsum.photos/240/352',
        title: 'Title example',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22',
        price: '$23'
      },
      {
        image: 'https://picsum.photos/240/352',
        title: 'Title example',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22'
      },
      {
        image: 'https://picsum.photos/240/352',
        title: 'Title example',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22',
        price: '$12.99'
      },
      {
        image: 'https://picsum.photos/240/352',
        title: 'Title example',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22'
      },
      {
        image: 'https://picsum.photos/240/352',
        title: 'Title example',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22'
      },
    ];
  }

}
