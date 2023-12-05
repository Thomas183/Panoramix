import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataTableForm } from '../models/data-table-form';

@Injectable({
  providedIn: 'root'
})
export class AllcsvService {

  constructor(
    private httpClient: HttpClient
  ) { }

  
  getAllcsv (page: number, size: number) : Observable<DataTableForm> {
    const parameters = {
      page: page,
      size: size,
    }
    return this.httpClient.get<DataTableForm>("http://localhost:8080/api/tables", { params: new HttpParams({ fromObject: parameters }) });
  }
}
