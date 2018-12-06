import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {
  user: UserInterface = <UserInterface>{};

  constructor(private _user: UserService) { }

  ngOnInit() {
    this._user.getCurrentUser().subscribe(
      (data: UserInterface) => this.user = data,
      error => console.error(error)
    );
  }
}
