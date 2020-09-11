import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-club-foot',
  templateUrl: './club-foot.component.html',
  styleUrls: ['./club-foot.component.scss']
})
export class ClubFootComponent implements OnInit {

  constructor(private https: HttpClient ) { }

  ngOnInit() {
  }
 
}
