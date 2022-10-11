import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-public-list',
  templateUrl: './public-list.component.html',
  styleUrls: ['./public-list.component.css']
})
export class PublicListComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.userView().subscribe(
      (data)=>{
        this.userData=data
      }
    )
  }








  userData:any={}
  ngOnInit(): void {
  }

}
