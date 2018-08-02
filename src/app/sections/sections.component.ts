import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  courses = []
  selectedCourse = {}
  section = {}

  constructor(private courseService: CourseServiceClient) { }

  selectCourse = course =>
    this.selectedCourse = course;

  addSection = section => {
    section.courseId = this.selectedCourse.id;
    this.sectionService.createSection(section);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
