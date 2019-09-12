import {FormControl} from '@angular/forms';

export function validateEmail(c: FormControl){
    let EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log('validator-email#validateEmail');

    return EMAIL_REGEX.test(c.value) ? null : {
        valideEmail: {valid: false}
    };
}