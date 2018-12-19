import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @ViewChild(MatAccordion)
  accordion: MatAccordion;

  @ViewChild(MatExpansionPanel)
  exPanels: MatExpansionPanel;

  isExpanded = true;
  
  constructor() { }

  ngOnInit() {
  }

  setToggleText() {
    return this.isExpanded ? 'Close' : 'Open';
  }

  toggle() {
    return this.isExpanded = !this.isExpanded;
  }

  setAccordionStatus() {
    let allPanels = document.querySelectorAll(".mat-expansion-panel").length;
    let openPanels = document.querySelectorAll(".mat-expansion-panel-spacing").length;

    if (openPanels === allPanels) {
      this.isExpanded = true;
    } 

    if (openPanels === 0) {
      this.isExpanded = false;
    }
  }
}
