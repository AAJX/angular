import { Project } from './project.model';

export class projectFake implements Project{
    
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public image: string) { }
}