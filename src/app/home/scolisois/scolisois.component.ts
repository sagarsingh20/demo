import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scolisois',
  templateUrl: './scolisois.component.html',
  styleUrls: ['./scolisois.component.scss']
})
export class ScolisoisComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
}
