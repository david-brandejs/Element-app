import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback';
import { Attribute } from './attribute';

@Component({
  moduleId: module.id,
  selector: 'feedback-detail',
  template: `
  <div>
    <h3>Feedback Attributes</h3>
    <div class="table-responsive">
        <table class="table table-striped">
            <tr>
                <th>#</th>
                <th>Created</th>
                <th>Updated</th>
                <th>Name</th>
                <th>Value</th>
            </tr>
            <tr *ngFor="let attribute of attributes">
                <td>{{ attribute.id }}</td>
                <td>{{ attribute._created | date:'d. M. y - HH:mm:ss' }}</td>
                <td>{{ attribute._updated || '-' }}</td>
                <td>{{ attribute.name }}</td>
                <td>{{ attribute.value }}</td>
            </tr>
        </table>
    </div>
</div>
`
})
export class FeedbackDetailComponent implements OnInit {
    @Input() item: Feedback;
    attributes: Attribute[] = [];
    navigated = false; // true if navigated here
    
    constructor(private route: ActivatedRoute, private feedbackService: FeedbackService, private slimLoadingBarService: SlimLoadingBarService) { 
        this.slimLoadingBarService.start();
    }
    
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.navigated = true;
            this.feedbackService.getFeedbackDetail(id)
                .then(feedbackDetail => {
                    this.item = feedbackDetail

                    if(this.item.id == 1)
                        this.feedbackService.getAttributes1()
                            .then(attributes => this.attributes = attributes);
                            
                    if(this.item.id == 2)
                        this.feedbackService.getAttributes2()
                            .then(attributes => this.attributes = attributes);
                            
                    this.slimLoadingBarService.complete();
            });
        });
    }
}