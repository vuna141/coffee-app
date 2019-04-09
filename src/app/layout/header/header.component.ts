import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {
    title: string = 'ORDER';
    @Output() onAdd: EventEmitter<Boolean> = new EventEmitter()
    
    constructor(){
    }
}