import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commit } from 'src/interfaces/commits';

const config = require('config/config.json');

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  private _commits: Commit[] = [];
  private baseurl: string = config.backendBaseurl;
  private port: string = config.backendPort;

  resultado: any[] = []; //Todo: Corregir el tipo
  
  public get commits() {
    return [...this._commits];
  }

  constructor(private http: HttpClient) { }

  getCommits() {
    this.http.get(`${this.baseurl}:${this.port}/commits`)
      .subscribe((resp: any) => {
        this.resultado = resp;
      });
  }
}
