import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SASH_SKY_MENU } from '../utils/constants';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  id:any;
  name: string;
  children?: FoodNode[];
  isSelected?: boolean;
  quantity?:Number;
}

// The id at first it starts with 1 digit
// and then 2 digits for every level
const TREE_DATA: FoodNode[] = [
  { 
    id:1,
    name: 'Fruit',
    children: [
      {
        id:101,
        name: 'Apple', 
        isSelected: false,
        quantity:0
      }, 
      {
        id:102,
        name: 'Banana',
        isSelected: false,
        quantity:0
      }, 
      {
        id:103,
        name: 'Fruit loops',
        isSelected: false,
        quantity:0
      }
    ],
  },
  {
    id:2,
    name: 'Vegetables',
    children: [
      {
        id:201,
        name: 'Green',
        children: [
          {
            id:20101,
            name: 'Broccoli',
            isSelected: false,
            quantity:0
          }, 
          {
            id:20102,
            name: 'Brussels sprouts',
            isSelected: false,
            quantity:0
          }
        ],
      },
      {
        id:202,
        name: 'Orange',
        children: [
          {
            id:20201,
            name: 'Pumpkins',
            children: [
              {
                id:2020101,
                name: 'Broccoli',
                isSelected: false,
                quantity:0
              }, 
              {
                id:2020102,
                name: 'Brussels sprouts',
                isSelected: false,
                quantity:0
              }
            ]
          },
          {
            id:20202,
            name: 'Carrots',
            isSelected: false,
            quantity:0
          }
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  allFoodItems: string[] = ['Pizza', 'Cripsy Chicken', 'Peri Peri Fries', 'Hookah', 'Coke'];
  panelOpenState = false;

  sashSkyMenu: any[] = SASH_SKY_MENU;

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  storeSelectedItem (node:any) {
    return node.isSelected = !node.isSelected;
  }

  quantityChange (node:any) {
    console.log('here',node);
    
    // console.log(event.value);
    
    // return
  }
}
