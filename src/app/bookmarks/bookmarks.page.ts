import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  constructor(private router: Router) { }

  eventsBookmarkers:number[] = [];
  repositoriesBookmarkers:number[] = [];

  ngOnInit() {
    let markers:string[]|undefined = localStorage.getItem(`bookmarkers_events`)?.split(',');
    markers?.forEach(m => this.eventsBookmarkers.push(parseInt(m)));
    markers = localStorage.getItem(`bookmarkers_repositories`)?.split(',');
    console.log(markers);
    markers?.forEach(m => this.repositoriesBookmarkers.push(parseInt(m)));
  }

  goto(chapter:string,bookmark:number){
    this.router.navigate([chapter,{page:bookmark}]);
  }

}
