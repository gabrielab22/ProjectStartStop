import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, of, take } from 'rxjs';
import { Project } from '../models/project';
import { ProjectFormGroup } from '../models/projectFormGroup';
import { ProjectService } from '../services/projectService';

@Component({
  selector: 'app-start-stop',
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.css']
})
export class StartStopComponent implements OnInit {

  projectForm!: ProjectFormGroup;
  projects!: Project[];
  startTime!: Date;
  stopTime!: Date;
  btnStart = "Start";
  btnStop = "Stop";
  isLoading: boolean = true;
  isStartButtonVisible = true;
  isStopButtonVisible = false;
  showDialog = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {

    this.projectForm = new ProjectFormGroup({
      name: new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
      duration: new FormControl()
    });

    this.getAllProjects();
  }

  start() {
    this.startTime = new Date();

    this.isStartButtonVisible = false;
    this.isStopButtonVisible = true;

    console.log("u startu", this.startTime);
  }


  stop() {
    this.stopTime = new Date();

    this.isStartButtonVisible = true;
    this.isStopButtonVisible = false;

    console.log("u Stopu", this.stopTime);
  }

  StopTimer() {
    const deviceName = <string>this.projectForm.name.value;

    var eventStartTime = new Date(this.startTime);
    var eventEndTime = new Date(this.stopTime);
    var duration = eventEndTime.valueOf() - eventStartTime.valueOf();

    console.log("Stop timer:", deviceName, duration)

    const userInput = <Project>this.projectForm.getRawValue();
    userInput.name = deviceName
    userInput.start = eventStartTime
    userInput.end = eventEndTime
    userInput.duration = duration.toString()

    this.projectService
      .createProject(userInput)
      .pipe(
        take(1),
        catchError(() => {
          return of();
        })
      )
      .subscribe();
  }

  private getAllProjects() {
    this.projectService
      .getAllProjects()
      .pipe(
        take(1),
        catchError(() => {
          return of();
        })
      )
      .subscribe(result => {
        this.projects = result;
        console.log("rez", this.projects)
        this.isLoading = false;
      });

  }
}

export class DialogContentExampleDialog { }