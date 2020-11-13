import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    delay: any = 3000;
    constructor () { }

    notify(message: string, type: string) {
        $.notify(
            { message },
            {
                type,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                delay: this.delay
            }
        );
    }

    alertSuccess(message) {
        this.notify(message, 'success');
    }

    alertError(message, delay = false) {
        if (delay) {
            this.delay = delay;
        }
        this.notify(message, 'danger');
    }

    alertWarning(message) {
        this.notify(message, 'warning');
    }

    alertInfo(message) {
        this.notify(message, 'info');
    }

}
