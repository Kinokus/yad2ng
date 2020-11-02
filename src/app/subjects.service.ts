import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICity} from "./ICity";
import {IArea} from "./IArea";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  cities$: BehaviorSubject<ICity>
  areas$: BehaviorSubject<IArea>
  apartments$: BehaviorSubject<IApartment>

  constructor() { }
}
