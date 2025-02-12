import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // por padrão tem que tipar, usar o any somente se não souber o tipo, ex: course: any[] = [];
  courses$: Observable<Course[]>;
  displayedColumns = ['name','category'];

  // coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    // iniciar a variável ou no construtor ou na declaração
    // this.courses = []

    // fazendo dessa forma quando não faz a injeção de dependencia no parametro do construtor
    // this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();
  }

  ngOnInit() {

  }

}
