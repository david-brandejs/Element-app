import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Website } from './website';
import { FeedbackService } from './feedback.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: `
<br><br>

<div class="flex-container" fxLayout="column" fxLayoutAlign="center center">
    <div fxFlex="400px" fxFlex.xs="150px" fxLayout="row" fxLayoutGap="15px" fxLayoutGap.xs="10px">
        <div fxFlex="150px" fxFlex.xs="55px" fxLayout="column">
            <div class="flex-item" fxFlex="20%" fxFlex.xs="20%"></div>
            <div class="flex-item column" fxFlex><img src="../assets/column-img/google.jpg"/></div>
        </div>
        
        <div fxFlex="450px" fxFlex.xs="165px" fxLayout="column" fxLayoutGap="15px" fxLayoutGap.xs="10px">
            <div class="flex-item column" fxFlex="62.5%" fxFlex.xs="62.5%"><img src="../assets/column-img/esf.jpg"/></div>
            <div class="flex-item column" fxFlex><img src="../assets/column-img/is.png"/></div>
        </div>
        
        <div fxFlex="150px" fxFlex.xs="55px" fxLayout="column">
            <div class="flex-item" fxFlex="20%" fxFlex.xs="20%"></div>
            <div class="flex-item column" fxFlex><img src="../assets/column-img/twitter.png"/></div>
        </div>
    </div>
</div> 
<br><br><br><br>

<md-card class="example-card">
<br><md-progress-spinner style="margin:0 auto;" mode="indeterminate" *ngIf="!spinner"></md-progress-spinner>

<md-list>
    <md-list-item *ngFor="let website of websites">
        <div style="background-color: grey;" md-list-avatar><img/></div>
        <h4 md-line>{{website.name}}, {{website.area}}</h4>
        <p md-line> {{website.description}} </p>
    </md-list-item>
</md-list>
</md-card>
`, styles: [`
md-list-item, .column {
    cursor: pointer;
}
.column {
    opacity: 0.7;
    border: solid 2px;
}
md-list-item:hover {
    background-color: lightgrey;
}
.column:hover {
    opacity: 1;
}
h4 {
    color: black;
}
`]
})
export class DashboardComponent {
    websites: Website[] = [];
    spinner: boolean = false;
    
    constructor(private router: Router, private feedbackService: FeedbackService) { }

    ngOnInit(): void {
        this.feedbackService.getWebsiteList()
          .then(websites => { 
              this.websites = websites;
              this.spinner = true;
        });
    }
}
