import { Component, ElementRef, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-feedback-modal',
    template: `
    <div class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
    [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Element <{{ el.nodeName }}></h3>
                </div>
                <div class="modal-body">
                    <div id="first-row"></div><br><hr>
                    <form action="" class="form-horizontal">
                        <div class="form-group">
                            <label for="rating" class="col-xs-4 control-label">Rating</label>
                            <div class="col-xs-8">
                                <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 1
                                </label>
                                <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 2
                                </label>
                                <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 3
                                </label>
                                <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4"> 4
                                </label>
                                <label class="radio-inline">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5"> 5
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="comment"  class="col-xs-4 control-label">Comment</label>
                            <div class="col-xs-8">
                                <textarea class="form-control" [(ngModel)]="comment" placeholder="Comment" name="comment" rows="3"></textarea>
                            </div>
                        </div>

                        <h4>Attributes</h4>

                        <div class="form-group">
                            <label for="background-color" class="col-xs-4 control-label">Background color</label>
                            <div class="col-xs-8">
                                <input type="color" class="form-control" id="background-color" [(ngModel)]="appendedElement.style.backgroundColor" 
                                value="appendedElement.style.backgroundColor" placeholder="{{ appendedElement.style.backgroundColor }}" name="background-color">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="color" class="col-xs-4 control-label">Content color</label>
                            <div class="col-xs-8">
                                <input type="color" class="form-control" id="color" [(ngModel)]="appendedElement.style.color" 
                                placeholder="{{ appendedElement.style.color }}" name="color">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="background-color" class="col-xs-4 control-label">Border width</label>
                            <div class="col-xs-8">
                                <input type="number" class="form-control" id="background-color" [(ngModel)]="borderWidth" 
                                name="background-color" (ngModelChange)="onBorderChange($event)"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="background-color" class="col-xs-4 control-label">Font</label>
                            <div class="col-xs-8">
                                <select class="form-control" value="{{ appendedElement.style.fontFamily }}" 
                                [(ngModel)]="appendedElement.style.fontFamily" name="font-family">
                                    <option *ngFor="let f of fonts">{{f}}</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" (click)="hide()">Close</button>
                    <button type="button" class="btn btn-primary" (click)="save()">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['modal.component.css']
})

export class FeedbackModalComponent {
    public visible = false;
    private visibleAnimate = false;
    private error: any;
    
    private borderWidth = 0;
    private fonts = ['Times', 'Arial', 'Calibri', 'Impact', 'Verdana'];
  
    @Input() public appendedElement: any;
    @Input() public comment: any;

    constructor(private el: ElementRef, private router: Router) {  
        this.appendedElement = [];
        this.appendedElement.style = [];
    }
    
    // changes the border width on input change
    onBorderChange(newValue) {
        if(newValue < 51 && newValue > -1) {
            this.appendedElement.style.borderWidth = newValue + 'px';
            this.appendedElement.style.borderStyle = 'solid';
        }
    }

    // shows the modal
    show(el: any) {
        this.el = el;
        
        // clones an element and allows user to change its attributes
        let parentElement = document.getElementById('first-row');
        this.appendedElement = el.cloneNode(true);
        this.appendedElement.removeAttribute("href");
        parentElement.appendChild(this.appendedElement);

        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);
    }
    
    // hides the modal
    hide() {
        this.appendedElement.parentNode.removeChild(this.appendedElement.parentNode.firstChild);

        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
}

