@Component({
    selector: 'students',
    template: '<h2>{{ title }} - {{ getCurrentDate() }}</h2>'
})

export class StudentsComponent{
    title = "My Lists of Students";

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        return new Date().toLocaleDateString();
    }
}

import { Component } from '@angular/core';







  
   
     
    