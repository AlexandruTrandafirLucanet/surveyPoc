import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  itemKey: string;
  displayName: string;
  children: Field[];
}

export interface Field { 
  id: string; 
  isNillable: boolean;
  label: string;
  name: string; 
  ns: string; 
  periodType: string; 
  substitutionGroup: string; 
  typeNameShort: string;
  enums: {key: string; value: string;}[];
  children: Field[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<Item[]> {
    // return this.http.get('assets/data/response.json') as Observable<Item[]>;
    return this.http.get('assets/data/compiledSamples-Final.json') as Observable<Item[]>;
    // return this.http.get('assets/data/response-table1-mock.json') as Observable<Item[]>;
    // return this.http.get('assets/data/response-table2-mock.json') as Observable<Item[]>;
  }

}
