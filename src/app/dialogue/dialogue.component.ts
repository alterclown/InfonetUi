import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationService } from '../information/services/information.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  myForm: FormGroup;
  constructor(public fb: FormBuilder, private infoService: InformationService, private _router: Router, private _avRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getInformationById();
  }
  getInformationById() {
    this.infoService.getInformationById(this._avRoute.snapshot.params.id).subscribe(data => {
      this.myForm = this.fb.group({
        name: (data['name']),
        country: (data['country']),
        city: (data['city']),
        languageSkills: (data['languageSkills']),
        dateOfBirth: (data['dateOfBirth']),
        fileUpload: (data['resumeUpload']),
      });
      this.myForm.get('dateOfBirth').patchValue(this.formatDate(new Date()));
    });
  }
  private formatDate(date) {
    const d = new Date(date)
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('-');
  }

}

