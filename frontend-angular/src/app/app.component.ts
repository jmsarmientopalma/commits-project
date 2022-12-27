import { Component } from '@angular/core';
import { Commit } from 'src/interfaces/commits';
import { CommitsService } from './services/commits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public get resultados() {
    return this.commitsService.resultado;
  }

  constructor(private commitsService: CommitsService){}

  actualiza(){
    this.commitsService.getCommits();
  }
}
