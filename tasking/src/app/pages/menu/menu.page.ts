import { Component, OnInit } from '@angular/core';
import{Router, Route, RouterEvent} from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages=[
    
    {
      title:'registro',
      url:'/menu/registro'
    },
    {
      title:'logueo',
      url:'/menu/logueo'
    }
  ];

  selectedPath='';

  constructor(private router:Router) { 
this.router.events.subscribe((event: RouterEvent)=>{
this.selectedPath = event.url;
});

  }

  ngOnInit() {
  }

}
