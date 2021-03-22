import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/dialouge-confirm/notification.service';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-create-information',
  templateUrl: './create-information.component.html',
  styleUrls: ['./create-information.component.css']
})
export class CreateInformationComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  fileAttr = 'Choose File';
  private map = new Map<string, string[]>([
    ['Bangladesh', ['Dhaka']],
    ['Pakistan', ['Islamabad']],
    ['England', ['London']],
    ['Argentina', ['Buens']],
    ['Spain', ['Barcelona']]
  ]);
  country: string;
  city: string;
  languageArray: any = ['C#', 'C++', 'PHP', 'Java'];
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(public fb: FormBuilder, private infoService: InformationService, private _router: Router,private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.reactiveForm();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['',[Validators.required]],
      country: [''],
      city: [''],
      languageSkills: ['', Validators.required],
      dateOfBirth: ['',[Validators.required]],
      fileUpload: ['']
    })
  }
  get f() { return this.myForm.controls; }
  onSubmit() {
    if (this.myForm.invalid) {
      return alert('Invalid Form');;
  }
  this.infoService.postInformation(this.myForm.value).subscribe(data => {
      console.log(data);
    });
    this.notificationService.warn('! Inserted successfully');
  }

  uploadFileEvt(file: any) {
    if (file.target.files && file.target.files[0]) {
      this.fileAttr = '';
      Array.from(file.target.files).forEach((file: File) => {
        this.fileAttr += file.name + ' - ';
      });
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(file.target.files[0]);
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  get countries(): string[] {
    return Array.from(this.map.keys());
  }

  get cities(): string[] | undefined {
    return this.map.get(this.country);
  }
}
