import Dexie from 'dexie';

interface LogScheme {
  id?: number,
  training: string,
  weight: number,
  count: number,
  date: Date
}

interface TrainingScheme {
  id?: number,
  category: string,
  name: string,
}

class Database extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  logs: Dexie.Table<LogScheme, number>; // number = type of the primkey
  //...other tables goes here...
  trainings: Dexie.Table<TrainingScheme, number>; // number = type of the primkey

  constructor () {
    super("Database");
    this.version(1).stores({
      logs: '++id, training, weight, count, date',
      trainings: '++id, category, name',
    });
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.logs = this.table("logs");
    this.logs.mapToClass(LogTable)

    this.trainings = this.table("trainings")
    this.trainings.mapToClass(TrainingTable)
  }
}

// function getRandomInt(min: number, max: number) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export class LogTable {
  date: Date;

  constructor(
    public training: string,
    public weight: number,
    public count: number,
    public id?: number
  ) {
    // const randomMonth = getRandomInt(1, 12)
    const d = new Date()
    // this.date = new Date(`${d.getFullYear()}/${randomMonth}/${d.getDate()}`)
    this.date = new Date(`${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`)
  }

  save() {
    return db.transaction('rw', db.logs, async () => {
      this.id = await db.logs.put(this)
    })
  }
}

export class TrainingTable {
  constructor(
    public category: string,
    public name: string,
    public id?: number
  ) {
  }

  save() {
    return db.transaction('rw', db.trainings, async () => {
      this.id = await db.trainings.put(this)
    })
  }
}

export const db = new Database()

