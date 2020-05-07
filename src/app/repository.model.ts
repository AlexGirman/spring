import { Discipline } from '../discipline/discipline.model';
import { SimpleDataSourse } from '../discipline/datasource.model';
export class Model {
  private datasource: SimpleDataSourse;
  private disciplins: Discipline[];
  private locator = (p: Discipline, id: number) => p.id == id;
  constructor() {
    this.datasource = new SimpleDataSourse();
    this.disciplins = new Array<Discipline>();
    this.datasource.getData().forEach(p => this.disciplins.push(p));
  }
  getDisciplines(): Discipline[] {
    return this.disciplins;
  }
  getDiscipline(id: number): Discipline {
    return this.disciplins.find(p => this.locator(p, id));
  }
  saveDiscipline(discipline: Discipline) {
    if (discipline.id == 0 || discipline.id == null) {
      discipline.id = this.generateID();
      this.disciplins.push(discipline);
    } else {
      let index = this.disciplins.findIndex(p => this.locator(p, discipline.id));
      this.disciplins.splice(index, 1, discipline);
    }
  }
  deleteDiscipline(id: number) {
    let index = this.disciplins.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.disciplins.splice(index, 1);
    }
  }
  private generateID(): number {
    let candidate = 100;
    while (this.getDiscipline(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
