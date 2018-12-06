import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserInterface } from '../../../interfaces/user.interface';
import { EducationInterface } from '../../../interfaces/education.interface';

@Component({
  selector: 'app-user-education',
  templateUrl: './user-education.component.html',
  styleUrls: ['./user-education.component.scss']
})
export class UserEducationComponent implements OnInit {
  educations: EducationInterface[] = [];

  constructor(private _user: UserService) { }

  ngOnInit() {
    this._user.getCurrentUser().subscribe(
      (data: UserInterface) => this.educations = data.education,
      error => console.error(error)
    );
  }
}
