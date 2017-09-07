import {Component} from '@angular/core';

@Component({
    selector: 'sandbox',
    template: `<h1>{{ name }} is {{ age}} years old</h1>
               <h2>My name is {{person.firstName}} {{person.lastName}} </h2>
               <ul>
                <li>{{'Hello World'}}</li>
                <li>{{1+1}}</li>
                <li>{{showAge()}} </li>
              </ul>`
})
export class SandboxComponent{
    name = 'John Doe';
    age = 35;
    person = {firstName: 'James', lastName: 'Smith'};
    // variables are placed inside of the class
    constructor(){
        console.log('Constuctor ran ...');
        //this.age = 36;
        this.hasBirthday();
    }// the constructor runs during every page load and overrides othe fields

    hasBirthday(){
        this.age += 5;
    }// this referes to the current class for example SandboxComponent

    showAge(){
        return this.age;
    }
}