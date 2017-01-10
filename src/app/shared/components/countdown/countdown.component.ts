import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Input() date: Date;

  private secondInterval: number;
  private minuteInterval: number;
  private hourInterval: number;
  private dayInterval: number;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {
    this.secondInterval = 1000;
    this.minuteInterval = this.secondInterval * 60;
    this.hourInterval = this.minuteInterval * 60;
    this.dayInterval = this.hourInterval * 24;
  }

  ngOnInit() {
    setInterval(() => this.refreshCountdown(), 1000);
  }

  refreshCountdown() {
    let dateDiff: number = this.date.getTime() - new Date().getTime();
    if (dateDiff < 0) {
      dateDiff = 0;
    }
    this.seconds = Math.floor((dateDiff % this.minuteInterval) / this.secondInterval);
    this.minutes = Math.floor((dateDiff % this.hourInterval) / this.minuteInterval);
    this.hours = Math.floor((dateDiff % this.dayInterval) / this.hourInterval);
    this.days = Math.floor(dateDiff / this.dayInterval);
  }
}
