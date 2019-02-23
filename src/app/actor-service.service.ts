import { Injectable } from '@angular/core';
interface Actor{
	name:string;
	shortname:string;
	bio:string;
	awards:string;
}

@Injectable({
  providedIn: 'root'
})
export class ActorServiceService {

  constructor() { }

  ACTORS:Actor[]=[
    {
      name:'Amitab Batchan',
      shortname:'bigb',
      bio:'The Big B of bollywood,acted over 100 films',
      awards:'Padma Vibushan'
    },
    {
      name:'Rajnikanth',
      shortname:'rajni',
      bio:'Superstar of kollywood, best known for his stylish acting',
      awards:'Padma Vibushan'
    },
    {
      name:'Hema malini',
      shortname:'hema',
      bio:'Dream Girl of bollywood, MP in Rajya sabha',
      awards:'Padma Shri'
    },
    {
      name:'Kamal Hassan',
      shortname:'kamal',
      bio:'Best known for his name Ulaganayagan, actor, director, singer and dancer',
      awards:'Padma Bhushan'
    },
    {
      name:'Sharukh Khan',
      shortname:'srk',
      bio:'One of the most paid actor in bollywood',
      awards:'Film fare winner (14 times)'
    },
    {
      name:'Akshay Kumar',
      shortname:'akshay',
      bio:'Action hero of bollywood, most paid actor',
      awards:'Padma Shri'
    }
  ]

  public getActors() {
    return this.ACTORS;
  }
}
