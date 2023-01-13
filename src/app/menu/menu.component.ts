import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SASH_SKY_MENU } from '../utils/constants';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    const a = route.params;
    const outletId: Observable<string> = route.params.pipe(map(p => p['outletId']));
    console.log('outletId',outletId);
    console.log('a',a);
    
  }

  sashSkyMenu: any[] = SASH_SKY_MENU;

  ngOnInit(): void {
  }
}
