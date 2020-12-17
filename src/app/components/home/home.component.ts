import { Component, OnInit } from '@angular/core';
import '@juanbeato/jb-header';
import '@juanbeato/jb-product-card-list';
import '@polymer/iron-image/iron-image.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  latestedItems: Object[];
  featuredItems: Object[];
  banners: Object[];
  horizontalSkeletonConfig: Object;

  constructor() { }

  ngOnInit(): void {
    this.horizontalSkeletonConfig = {
      items: 5,
      itemConfig: {
        image: '',
        title: 'skeletonTitle',
        description: 'skeletonDescription',
        time: 'skeletonTime',
        price: 'skeletonPrice'
      }
    };
    this.featuredItems = [
      {
        image: 'https://images.unsplash.com/photo-1517644493876-7864565e3bf9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'The Forgotten Hours',
        price: '$23',
        buttonText: 'Free'
      },
      {
        image: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'Whiskey in a Teacup',
        buttonText: 'Free'
      },
      {
        image: 'https://images.unsplash.com/photo-1548412633-3ff82869a617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'Kate spade new york',
        price: '$19.99',
        buttonText: 'Free'
      },
      {
        image: 'https://images.unsplash.com/photo-1587771610231-52f1cb3b77c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80',
        title: 'Title example',
        buttonText: 'Free'
      },
      {
        image: 'https://images.unsplash.com/photo-1545905006-8ea33795739b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'Title example',
        buttonText: 'Free'
      },
    ];
    this.latestedItems = [
      {
        image: 'https://images.unsplash.com/photo-1517148892120-4d2da39c8dc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'The Forgotten Hours',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22',
        price: '$23',
        buttonText: 'Free'
      },
      {
        image: 'https://images.unsplash.com/photo-1507318584470-a67407ebe29a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'Whiskey in a Teacup',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22',
        buttonText: 'Free'
      },
      {
        image: 'https://images.unsplash.com/photo-1498440610310-12805827d22e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80',
        title: 'Kate spade new york',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22',
        price: '$12.99',
        buttonText: 'Free'
      },
      {
        image: 'https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=614&q=80',
        title: 'Title example',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22',
        buttonText: 'Free'
      },
      {
        image: 'https://picsum.photos/240/352',
        title: 'Title example',
        description: 'Minions ipsum poulet tikka masala ti aamoo! Jiji. Uuuhhh baboiii poulet tikka masala jeje poopayee bananaaaa bee do bee do bee do ti aamoo! Butt. Daa baboiii poulet tikka masala la bodaaa tulaliloo. Hahaha baboiii chasy pepete poulet tikka masala bee do bee do bee do tank yuuu! Gelatooo la bodaaa. Para tú chasy underweaaar hana dul sae po kass bananaaaa.',
        time: '12:20:22',
        buttonText: 'Free'
      },
    ];
    this.banners = [
      {
        image: 'https://images.unsplash.com/photo-1571302171876-484bffd73852?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        title: 'BOOKS',
        subTitle: 'LISTENING',
      },
      {
        image: 'https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
        title: 'COURSES',
        subTitle: 'NEW',
      }
    ]
    };

}
