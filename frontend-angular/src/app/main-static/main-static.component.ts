import { Component } from '@angular/core';
import { CommitsService } from "../services/commits.service";

@Component({
  selector: 'app-main-static',
  templateUrl: './main-static.component.html',
  styleUrls: ['./main-static.component.css']
})
export class MainStaticComponent {

  constructor(private commitsService: CommitsService){}

  actualiza(){
    this.commitsService.getCommits();
  }

}
