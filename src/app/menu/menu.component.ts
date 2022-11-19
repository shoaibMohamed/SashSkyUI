import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SASH_SKY_MENU } from '../utils/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  constructor() {
  }

  sashSkyMenu: any[] = SASH_SKY_MENU;

  ngOnInit(): void {
  }
}
