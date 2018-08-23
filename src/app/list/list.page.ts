import { Component, OnInit } from '@angular/core';
import {ItemService} from '../items/item.service'
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private itemService:ItemService) {
  }

  ngOnInit() {
    this.itemService.list().subscribe((data:any)=>{
      data.forEach(item => {
        this.items.push({
        title: item,
        note: 'descrip....',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      });
    })
  }
}
