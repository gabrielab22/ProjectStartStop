import { FormControl, FormGroup } from '@angular/forms';

export class ProjectFormGroup extends FormGroup {
    get id(): FormControl {
        return <FormControl>this.get('Id');
    }

    get name(): FormControl {
        return <FormControl>this.get('name');
    }
    get start(): FormControl {
        return <FormControl>this.get('start');
    }

    get end(): FormControl {
        return <FormControl>this.get('end');
    }

    get duration(): FormControl {
        return <FormControl>this.get('duration');
    }
}