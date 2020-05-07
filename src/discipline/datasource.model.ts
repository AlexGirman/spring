import { Discipline } from './discipline.model';
export class SimpleDataSourse {
  private data: Discipline[];
  constructor() {
    this.data = new Array<Discipline>(
      new Discipline(1, "История"),
      new Discipline(2, "Экономика"),
      new Discipline(3, "Политология"));
  }
  getData(): Discipline[] { return this.data; }
}
