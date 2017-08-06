import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Feedback } from './feedback';
import { Attribute } from './attribute';
import { Website } from './website';

@Injectable()
export class FeedbackService {
    private websiteListUrl = 'https://private-912a6-elementapp.apiary-mock.com/website-list';
    private websiteFeedbackUrl = 'https://private-912a6-elementapp.apiary-mock.com/website-feedback';  // URL to website feedback
    private attributes1Url = 'https://private-912a6-elementapp.apiary-mock.com/attributes1'; 
    private attributes2Url = 'https://private-912a6-elementapp.apiary-mock.com/attributes2';  
  
    constructor(private http: Http, private authHttp: AuthHttp) { }
    
    // ===== Website list Methods =====

    getWebsiteList() {
        return this.http
            .get(this.websiteListUrl)
            .toPromise()
            .then(response => response.json() as Website[])
            .catch(this.handleError);
    }
    
    // ===== Website feedback Methods =====

    getFeedback() {
        return this.http
            .get(this.websiteFeedbackUrl)
            .toPromise()
            .then(response => response.json() as Feedback[])
            .catch(this.handleError);
    }
    
    getFeedbackDetail(id: number): Promise<Feedback> {
        return this.getFeedback()
            .then(feedback => feedback.find(feedbackDetail => feedbackDetail.id === id));
    }
  
  // ===== Feedback detail Methods =====

    getAttributes1() {
        return this.http
            .get(this.attributes1Url)
            .toPromise()
            .then(response => response.json() as Attribute[])
            .catch(this.handleError);
    }
    
    getAttributes2() {
        return this.http
            .get(this.attributes2Url)
            .toPromise()
            .then(response => response.json() as Attribute[])
            .catch(this.handleError);
    }
  
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}