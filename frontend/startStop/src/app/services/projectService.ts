import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private apiBaseUrl = 'https://localhost:7087/Project';

    constructor(private httpClient: HttpClient) { }

    getAllProjects(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.apiBaseUrl);
    }

    createProject(project: Project): Observable<Project> {
        return this.httpClient.post<Project>(this.apiBaseUrl, project);
    }
}