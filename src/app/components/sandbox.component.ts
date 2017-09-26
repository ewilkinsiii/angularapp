import {Component} from '@angular/core';
import {Customer} from'./Customer';

@Component({
    selector: 'sandbox',
    templateUrl: `./sandbox.component.html`,
    styleUrls:['./sandbox.component.css']
})
export class SandboxComponent{
    customer:Customer
    customers:Customer[];
    constuctor(){
        this.customer ={
            id:1,
            name:'John Doe',
            email:'john@email.com'
        }

        this.customers = [
            {
                id:1,
                name:'John Doe',
                email:'john@email.com'
            },
            {
                id:2,
                name:'Jane Smith',
                email:'jane@email.com'
            },
            {
                id:3,
                name:'Gene Will',
                email:'gene@email.com'
            }
        ];
    }
}