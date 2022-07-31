import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface PeriodicElement {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:any;
  constructor(private _user: UserService) { 
    this._user.getData().subscribe(data=>{
      this.data=data.data
    })
  }

  ngOnInit(): void {
  }
  image:any;
  clicked(data:any){
   this.image=data;
  }

  displayedColumns: string[] = ['id','email', 'firstname', 'lastname', 'avatar'];
  clickedRows = new Set<PeriodicElement>();

}
