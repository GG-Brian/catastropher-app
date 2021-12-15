export class Disaster {
    id: number;
    type: string;
    origin: string;
    area: number;
    injured: number;
    deceased: number;
    time: string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
   }
}