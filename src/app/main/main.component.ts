import { Component, OnInit } from '@angular/core';
import {SubjectsService} from "../subjects.service";
import {BehaviorSubject} from "rxjs";
import {IApartment} from "../IApartment";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public apartment$: BehaviorSubject<IApartment>;

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit(): void {
    this.apartment$ =this.subjectsService.apartment$
  }

}
