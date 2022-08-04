import { OutputTarget } from '../Evaluation';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
