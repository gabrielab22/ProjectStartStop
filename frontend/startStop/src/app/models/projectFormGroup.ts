import { FormControl, FormGroup } from '@angular/forms';

export class ProjectFormGroup extends FormGroup {
    get id(): FormControl {
        return <FormControl>this.get('Id');
    }

    get name(): FormControl {
        return <FormControl>this.get('name');
    }
    get startProject(): FormControl {
        return <FormControl>this.get('startProject');
    }

    get endProject(): FormControl {
        return <FormControl>this.get('endProject');
    }

    get duration(): FormControl {
        return <FormControl>this.get('duration');
    }
}