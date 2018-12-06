import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: UserInterface = <UserInterface>{};

  constructor(private _user: UserService) { }

  ngOnInit() {
    this._user.getCurrentUser().subscribe(
      (data: UserInterface) => this.currentUser = data,
      error => console.error(error)
    );
  }
}
