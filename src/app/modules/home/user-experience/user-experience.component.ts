import {Component, OnInit, ViewChild} from '@angular/core';
import { UserInterface } from '../../../interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { ExperienceInterface } from '../../../interfaces/experience.interface';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.scss']
})
export class UserExperienceComponent implements OnInit {
  user: UserInterface = <UserInterface>{};
  experience: ExperienceInterface[] = [];
  @ViewChild(ChartComponent) chart: ChartComponent;
  type = 'pie';
  data = {
    labels: [],
    datasets: [
      {
        label: 'Experience',
        data: [],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#7B1FA2', '#42A5F5', '#00897B']
      }
    ]
  };
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  };

  constructor(private _user: UserService) {}

  ngOnInit() {
    this._user.getCurrentUser().subscribe(
      (data: UserInterface) => {
        const barChartLabelsArray = [];
        const barChartDataArray = [];

        this.user = data;
        this.experience = this.user.experience;

        this.experience.forEach(item => {
          barChartLabelsArray.push(item.barChartLabels);
          barChartDataArray.push(item.barChartData);
        });

        this.data.labels = barChartLabelsArray;
        this.data.datasets[0].data = barChartDataArray;

        this.chart.chart.update();
      },
      error => console.error(error)
    );
  }
}
