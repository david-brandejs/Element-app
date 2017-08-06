import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'settings',
  template: `
<md-card>
    <form action="" class="row form-horizontal">
        <div class="col-md-12">
            <label for="basic-url" class="control-label">Website URL</label>
            <div class="input-group col-md-12">
                <input type="text" class="form-control" id="basic-url" placeholder="URL" value="http://www.econ.muni.cz/">
            </div>
            <br>
            <label for="name" class="control-label">Website Name</label>
            <div class="input-group col-md-12">
                <input type="text" class="form-control" id="name" placeholder="Name" value="ESF Muni">
            </div>
            <br>
            <label for="field" class="control-label">Field of Activity</label>
            <div class="input-group col-md-12">
                <select class="form-control" name="field" value="{{ESFfieldOfActivity}}">
                    <option *ngFor="let f of fieldOfActivity">{{f.value}}</option>
                </select>
            </div>
            <br>
            <label for="description" class="control-label">Description</label>
            <div class="input-group col-md-12">
                <textarea class="form-control" placeholder="Description" name="description" rows="3">Website for the Faculty of Economics and Administration at Masaryk University</textarea>
            </div>
        </div>
    </form>
</md-card>
<br><br>
<md-card>
    <p>This piece of code is required in every HTML page of your website:</p>
    <md-card>
        <code>
            &#60;script&#62;
            <br>&#47;&#47;
            <br>&#47;&#47; A FAKE CODE SNIPPET USED FOR GATHERING DATA 
            <br>&#47;&#47; ABOUT WEBSITE FEEDBACK GIVEN BY ITS USERS.
            <br>&#47;&#47;
            <br>&#60;&#47;script&#62;
        </code>
    </md-card>
</md-card>
`
})
export class SettingsComponent implements OnInit {
    constructor(private router: Router) { }
    
    public ESFfieldOfActivity = 'Education';
    
    public fieldOfActivity = [
        {value: 'Agriculture'},
        {value: 'Fishery'},
        {value: 'Manufacturing'},
        {value: 'Production'},
        {value: 'Civil engineering'},
        {value: 'Commerce'},
        {value: 'Hospitality'},
        {value: 'Transportation'},
        {value: 'Administration'},
        {value: 'Finances'},
        {value: 'Education'},
        {value: 'Health services'},
        {value: 'Other'}
    ];

    ngOnInit(): void { }
}