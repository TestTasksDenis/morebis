import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInterface } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss']
})
export class UserSkillsComponent implements OnInit {
  user: UserInterface = <UserInterface>{};
  @ViewChild(ChartComponent) chart: ChartComponent;
  type = 'horizontalBar';
  data = {
    labels: [],
    datasets: [
      {
        label: 'Experience',
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#7B1FA2', '#42A5F5', '#00897B']
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor(private _user: UserService) {}

  ngOnInit() {
    this._user.getCurrentUser().subscribe(
      (data: UserInterface) => {
        this.user = data;
        this.data.labels = this.user.skills.doughnutChartLabels;
        this.data.datasets[0].data = this.user.skills.doughnutChartData;
        this.chart.chart.update();
      },
      error => console.error(error)
    );
  }
}
