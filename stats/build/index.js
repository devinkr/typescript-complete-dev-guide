"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const HtmlReport_1 = require("./ReportTargets/HtmlReport");
const Summary_1 = require("./Summary");
// Create an Object that satisfies DataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Newcastle'), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
