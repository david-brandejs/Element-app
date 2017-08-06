import { Component, ViewChild, ElementRef, Renderer, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';

import { FeedbackModalComponent } from './feedbackModal.component';
import { RouterModule, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <ng2-slim-loading-bar [height]="'4px'"></ng2-slim-loading-bar>
    <div class="container">
        <div class="row header-row">
            <div class="col-md-6"><h1>{{title}}</h1><p><b>Alpha version</b></p></div>
            <div class="col-md-6">
                <nav class="main-navigation">
                    <a routerLink="/home" routerLinkActive="active" *ngIf="!loggedAsRespondent && !loggedAsManager">Home</a>
                    <a routerLink="/features" routerLinkActive="active" *ngIf="!loggedAsRespondent && !loggedAsManager">Features</a>
                    <a routerLink="/pricing" routerLinkActive="active" *ngIf="!loggedAsRespondent && !loggedAsManager">Pricing</a>
                    <a routerLink="/about-us" routerLinkActive="active" *ngIf="!loggedAsRespondent && !loggedAsManager">About</a>
                    
                    <button md-button [mdMenuTriggerFor]="menu" *ngIf="!loggedAsRespondent && !loggedAsManager">Log In</button>
                    <md-menu #menu="mdMenu">
                        <button (click)=respondentLoginWithoutAuthservice() md-menu-item>Log In as Respondent</button>
                        <button (click)=managerLoginWithoutAuthservice() md-menu-item>Log In as Manager</button>
                    </md-menu>
                    
                    <a routerLink="/website-dashboard" routerLinkActive="active" *ngIf="loggedAsRespondent || loggedAsManager">Feedback</a>
                    <a routerLink="/dashboard" routerLinkActive="active" *ngIf="loggedAsRespondent || loggedAsManager">Websites</a>
                    <a routerLink="/settings" routerLinkActive="active" *ngIf="loggedAsManager">Settings</a>
                    <a (click)=logoutWithoutAuthservice() *ngIf="loggedAsRespondent || loggedAsManager">Log Out</a>
                </nav>
            </div>
        </div>
        
        <my-feedback-modal></my-feedback-modal>
        <router-outlet></router-outlet>
        
        <button class="feedback-button" (click)=giveFeedback()>Feedback</button>
        <simple-notifications [options]="options"></simple-notifications>
    </div>
    `,
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Element';
    
    // options for a notification telling the user to choose an element he would like to rate
    public options = {
        timeOut: 0,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 50,
        animate: "fromRight"
    };
    
    loggedAsRespondent: boolean = false;
    loggedAsManager: boolean = false;
    
    lastEvent: any;
    listening: boolean = false;
    allowClick: boolean = false;
    globalListenClickFunc: Function;
    globalListenMousemoveFunc: Function;
    
    @ViewChild(FeedbackModalComponent) feedbackModal: FeedbackModalComponent;

    constructor(private authService: AuthService, private el: ElementRef, private router: Router, 
        private notificationsService: NotificationsService, private renderer: Renderer) 
    {  
        this.lastEvent = el;
        this.lastEvent.style = [];
    }
    
    ngOnDestroy() {
        // Removes the click and mousemove listeners
        this.removeListeners();
    }
    
    addListeners() {
        // listens for clicks; once user clicks, triggers a modal 
        // that allows the user to give feedback concerning the clicked element
        this.globalListenClickFunc = this.renderer.listenGlobal('document', 'click', (event) => {
            if (this.listening == true && this.allowClick) {
                event.target.style.boxShadow = null;
                
                this.notificationsService.remove();
                this.feedbackModal.show(event.target);

                this.listening = false;
                this.allowClick = false;
                
                // once user clicks to rate an element, the listeners are not needed and therefore removed
                this.removeListeners();
            }
        });
        
        // listens for mousemove; once user moves over an element, that element's 
        // box shadow is highlighted (turns yellow with 5 pixel large border)
        this.globalListenMousemoveFunc = this.renderer.listenGlobal('document', 'mousemove', (event) => {
            if (this.listening == true && this.lastEvent != event.target) {
                if(!this.allowClick)
                    this.allowClick = true;

                this.lastEvent.style.boxShadow = '';
                if(event.target.className != 'container') {
                    event.target.style.boxShadow = '0 0 0 5px yellow';
                }
                this.lastEvent = event.target;
            }
        });
    }
    
    removeListeners() {
        this.globalListenClickFunc();
        this.globalListenMousemoveFunc();
    }
    
    giveFeedback() {
        // when user clicks the feedback button, this function shows a notification,
        // tells the user to choose an element and triggers the listeners
        this.notificationsService.info(
            'Feedback',
            "Choose an element you would like to rate.",
            this.options
        )
        
        this.listening = true;
        this.addListeners();
    }
    
    
    respondentLoginWithoutAuthservice() {
        this.loggedAsRespondent = true;
        let link = ['/dashboard'];
        this.router.navigate(link);
    }
    
    managerLoginWithoutAuthservice() {
        this.loggedAsManager = true;
        let link = ['/dashboard'];
        this.router.navigate(link);
    }
    
    logoutWithoutAuthservice() {
        this.loggedAsRespondent = false;
        this.loggedAsManager = false;
        let link = ['/home'];
        this.router.navigate(link);
    }
}