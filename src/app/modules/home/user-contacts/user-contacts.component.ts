import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import {ContactsInterface} from '../../../interfaces/contacts.interface';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.scss']
})
export class UserContactsComponent implements OnInit {
  userContacts: ContactsInterface = <ContactsInterface>{};

  constructor(private _user: UserService) { }

  ngOnInit() {

    this._user.getCurrentUser().subscribe(
      (data: UserInterface) => this.userContacts = data.contacts,
      error => console.error(error)
    );
  }
}
