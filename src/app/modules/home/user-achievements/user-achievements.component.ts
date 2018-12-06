import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserInterface } from '../../../interfaces/user.interface';
import { AchievementsInterface } from '../../../interfaces/achievements.interface';

@Component({
  selector: 'app-user-achievements',
  templateUrl: './user-achievements.component.html',
  styleUrls: ['./user-achievements.component.scss']
})
export class UserAchievementsComponent implements OnInit {
  achievements: AchievementsInterface[] = [];

  constructor(private _user: UserService) { }

  ngOnInit() {
    this._user.getCurrentUser().subscribe(
      (data: UserInterface) => this.achievements = data.achievements,
      error => console.error(error)
    );
  }
}
