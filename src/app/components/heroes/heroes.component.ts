import { Component, OnInit } from '@angular/core';
import { Hero } from '../../heros';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../services/hero/hero.service';
import { MessagesService } from '../../services/messages/messages.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?:Hero;

  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes =>this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  constructor(private heroService: HeroService, private messagesService: MessagesService) { }

  ngOnInit(): void {

    this.getHeroes();
  }

}
