import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-update-information',
  templateUrl: './update-information.component.html',
  styleUrls: ['./update-information.component.css']
})
export class UpdateInformationComponent implements OnInit {
  myForm: FormGroup;
  fileAttr = 'Choose File';
  submitted = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  private map = new Map<string, string[]>([
    ['Bangladesh', ['Dhaka']],
    ['Pakistan', ['Islamabad']],
    ['England', ['London']], 
    ['Argentina', ['Buens']],
    ['Spain', ['Barcelona']]
  ]);
  country: string;
  city: string;
  languageArray:any=['C#','C++','PHP','Java']
  constructor(public fb: FormBuilder,private infoService:InformationService,private _router:Router,private _avRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.getInformationById();
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['',Validators.required],
      country: [''],
      city: [''],
      languageSkills: [''],
      dateOfBirth: ['',Validators.required],
      fileUpload:['']
    })
  }
  get f() { return this.myForm.controls; }
  onUpdate() {
      this.infoService.putInformation(this._avRoute.snapshot.params.id, this.myForm.value).subscribe(data => {
      console.log(data);
    });
  }
  getInformationById() {
    this.infoService.getInformationById(this._avRoute.snapshot.params.id).subscribe(data => {
      this.myForm = this.fb.group({
      name:(data['name']),
      country:(data['country']),
      city:(data['city']),
      languageSkills:(data['languageSkills']),
      dateOfBirth:(data['dateOfBirth']),
      fileUpload:(data['resumeUpload']),
      });
    });
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
