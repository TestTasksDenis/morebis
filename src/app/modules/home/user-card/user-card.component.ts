import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() currentUser: UserInterface;

  constructor() { }

  ngOnInit() {
  }

}
