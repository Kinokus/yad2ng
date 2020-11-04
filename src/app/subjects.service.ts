import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICity} from "./ICity";
import {IArea} from "./IArea";
import {IApartment} from "./IApartment";
import {IAddress} from "./IAddress";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  cities$: BehaviorSubject<ICity[]>
  city$: BehaviorSubject<ICity>
  areas$: BehaviorSubject<IArea[]>
  area$:BehaviorSubject<IArea>
  address$:BehaviorSubject<IAddress>
  apartments$: BehaviorSubject<IApartment[]>
  apartment$: BehaviorSubject<IApartment>
  addresses$: BehaviorSubject<IAddress[]>;


  constructor() {
    this.apartment$ = new BehaviorSubject<IApartment>(null)
    this.apartments$ = new BehaviorSubject<IApartment[]>(null)
    this.areas$ = new BehaviorSubject<IArea[]>(null)
    this.cities$ = new BehaviorSubject<ICity[]>(null)
    this.area$ = new BehaviorSubject<IArea>(null)
    this.city$ = new BehaviorSubject<ICity>(null)
    this.address$ = new BehaviorSubject<IAddress>(null)
    this.addresses$ = new BehaviorSubject<IAddress[]>(null)
  }
}
