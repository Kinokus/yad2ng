import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICity} from "./ICity";
import {IArea} from "./IArea";
import {IApartment} from "./IApartment";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  cities$: BehaviorSubject<ICity[]>
  areas$: BehaviorSubject<IArea[]>
  apartments$: BehaviorSubject<IApartment[]>
  apartment$: BehaviorSubject<IApartment>

  async getCities(): Promise<void> {
    
  }

  constructor() {
    this.apartment$ = new BehaviorSubject<IApartment>(null)
    this.apartments$ = new BehaviorSubject<IApartment[]>(null)
    this.areas$ = new BehaviorSubject<IArea[]>(null)
    this.cities$ = new BehaviorSubject<ICity[]>(null)
  }
}
