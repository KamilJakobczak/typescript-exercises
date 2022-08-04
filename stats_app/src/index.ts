import { Evaluation } from './Evaluation';
import { MatchReader } from './MatchReader';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');
const evaluation = Evaluation.winsAnalysisWithHtmlReport('ManUnited');

// const evaluation = new Evaluation(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// );

matchReader.load();
evaluation.buildAndPrintReport(matchReader.matches);
