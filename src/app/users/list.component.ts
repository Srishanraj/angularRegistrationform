import { Component, OnInit } from '@angular/core';  
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

declare var window:any;

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    formModal:any;
    users = null;
  

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
            this.formModal = new window.bootstrap.Modal(
                document.getElementById("exampleModal")
            );
    }
    openModal(){
        this.formModal.show();
    }
    doSomething(){
        this.formModal.hide();
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id) 
            });
    }
}