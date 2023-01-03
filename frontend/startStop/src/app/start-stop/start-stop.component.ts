import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  btnStart = "Start";
  btnStop = "Stop";
  isLoading: boolean = true;

  constructor(private projectService: ProjectService, public dialog: MatDialog) { }

  ngOnInit() {

    this.projectForm = new ProjectFormGroup({
      name: new FormControl(),
      startProject: new FormControl(),
      endProject: new FormControl(),
      duration: new FormControl()
    });

    this.getAllProjects();
  }

  start() {
    const newProject = {} as Project
    const currentDate = new Date();
    newProject.start = currentDate;

    console.log("u startu", newProject.start)
  }


  stop() {
    console.log("Stop")
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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