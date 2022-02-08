import { Injectable } from '@angular/core';
import { Hero } from './heros';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messagesService.add('HeroService: Fetched Heroes')
    return heroes;
  }

  constructor(private messagesService: MessagesService) { }
}
