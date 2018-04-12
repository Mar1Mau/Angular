import { Component, Output, EventEmitter } from '@angular/core';
import { MovieInfo } from '../shared/models/movie-info.model';
import { movieData } from '../shared/models/movie-data.model';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public localMovieData: MovieInfo[];
  
  
  constructor() {

    this.localMovieData = movieData;

   }

   @Output() onMovieSelected:EventEmitter<string> = new EventEmitter<string>();

  public onMovieClick(name:string):void{
    this.onMovieSelected.emit(name);
  }
    
   

  
  }

   

  
  

