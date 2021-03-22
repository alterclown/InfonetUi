import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Information } from '../models/information';


@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(private httpClient: HttpClient) {
  }
  _informationList: Information[] = [];
  formData: Information;
  readonly rootURL = 'https://localhost:44328/api/';

  postInformation(formData) {
    return this.httpClient.post(this.rootURL + 'Information/PostInformation', formData);
  }
 
  putInformation(InformationId, data) {
    return this.httpClient.put(this.rootURL + 'Information/PutInformation/'+ InformationId, data);
  }
  deleteInformation(informationId: number) {
    return this.httpClient.delete(this.rootURL +'Information/DeleteById/'+ informationId);
  }

  getInformation(){
    return this.httpClient.get(this.rootURL + 'Information/GetInformationList');
  }
  getInformationById(informationId) {
    return this.httpClient.get(this.rootURL +'Information/GetInformationById/'+ informationId);
  }
  getInformations() {
    return this._informationList;
  }
}