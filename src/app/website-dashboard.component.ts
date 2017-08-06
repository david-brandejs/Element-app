import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

@Component({
  moduleId: module.id,
  selector: 'website-dashboard',
  template: `
<md-card>
    <md-tab-group>
        <md-tab label="Website Feedback">
            <md-progress-spinner style="margin:0 auto; margin-top: 50px;" mode="indeterminate" *ngIf="!spinner"></md-progress-spinner>

            <div class="table-responsive" *ngIf="spinner">
                <table class="table table-hover">
                    <tr>
                        <th>#</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Element</th>
                        <th>Rating</th>
                        <th>Comment</th>
                    </tr>
                    <tr *ngFor="let item of feedback" (click)="goToDetail(item)">
                        <td>{{ item.id }}</td>
                        <td>{{ item._created | date:'d. M. y - HH:mm:ss' }}</td>
                        <td>{{ item._updated || '-' }}</td>
                        <td><img src="../assets/element-img/{{ item.id }}.jpg"/></td>
                        <td>{{ item.rating }}</td>
                        <td>{{ item.comment }}</td>
                    </tr>
                </table>
            </div>
        </md-tab>

        <md-tab label="My Feedback">

        </md-tab>
    </md-tab-group>
</md-card>
`
})
export class WebsiteDashboardComponent implements OnInit {
    feedback: Feedback[] = [];
    spinner: boolean = false;
    @Input() loggedAsManager;
  
    constructor(private router: Router, private feedbackService: FeedbackService) { }

    ngOnInit(): void {
        this.feedbackService.getFeedback()
          .then(feedback => { 
              this.feedback = feedback;
              this.spinner = true;
        });
    }

    goToDetail(feedback: Feedback): void {
        let link = ['/feedback-detail', feedback.id];
        this.router.navigate(link);
    }
}