import * as excelToJson from "convert-excel-to-json";
import { read, utils } from "xlsx";

export function getInitialChartData() {}

export async function uploadExcelAndGetChartData(file) {
  // const result = excelToJson({
  //   sourceFile: file,
  //   sheets: ["Bank Transactions"],
  //   columnToKey: {
  //     A: "Category",
  //     B: 1,
  //   },
  // });
  const f = await file.arrayBuffer();
  const wb = read(f);
  const result = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
    header: 1,
  });
  const dataMap = new Map();
  let totalExpenditure = 0;
  result.forEach((row) => {
    if (row[0] && row[0].includes("Amazon")) {
      if (!dataMap.has("Shopping")) {
        dataMap.set("Shopping", 0);
      }
      dataMap.set("Shopping", dataMap.get("Shopping") + row[1]);
    } else if (row[0] && row[0].includes("Trip")) {
      if (!dataMap.has("Travel")) {
        dataMap.set("Travel", 0);
      }
      dataMap.set("Travel", dataMap.get("Travel") + row[1]);
    } else if (row[0] && row[0].includes("Food")) {
      if (!dataMap.has("Food")) {
        dataMap.set("Food", 0);
      }
      dataMap.set("Food", dataMap.get("Food") + row[1]);
    } else if (
      row[0] &&
      (row[0].includes("Stocks") || row[0].includes("Deposits"))
    ) {
      if (!dataMap.has("Savings")) {
        dataMap.set("Savings", 0);
      }
      dataMap.set("Savings", dataMap.get("Savings") + row[1]);
    } else if (row[0] && (row[0].includes("Gas") || row[0].includes("bill"))) {
      if (!dataMap.has("Fuel")) {
        dataMap.set("Fuel", 0);
      }
      dataMap.set("Fuel", dataMap.get("Fuel") + row[1]);
    } else if (row[0] && row[0].includes("Salary")) {
      dataMap.set("Salary", row[1]);
    }
    if (row[0] && !row[0].includes("Salary")) {
      totalExpenditure += row[1];
    }
  });
  return dataMap;
}

export function getRecommendedPlan(
  dataMap,
  lifeExpectancy,
  ageToRetire,
  monthlyExpenses,
  age
) {
  const needAllocationPercentage = 50;
  const wantAllocationPercentage = 30;
  const savingsAllocationPercentage = 20;
  const equityAllocationPercentage =
    savingsAllocationPercentage * ((100 - age) / 100);
  const cryptoAllocationPercentage =
    (savingsAllocationPercentage - equityAllocationPercentage) * (50 / 100);
  const debtAllocationPercentage =
    (savingsAllocationPercentage - equityAllocationPercentage) * (50 / 100);

  let needCategories = ["Food", "Fuel"];
  let wantCategories = ["Travel", "Shopping"];
  let savingsCategories = ["Equity", "Crypto", "Debt"];

  let salaryAmount = dataMap.get("Salary");
  const recommendedDataMap = new Map();
  recommendedDataMap.set(
    needCategories[0],
    Math.min(
      20000,
      salaryAmount * (needAllocationPercentage / 100) * (60 / 100)
    )
  );
  recommendedDataMap.set(
    needCategories[1],
    Math.min(
      20000,
      salaryAmount * (needAllocationPercentage / 100) * (40 / 100)
    )
  );

  recommendedDataMap.set(
    wantCategories[0],
    Math.min(
      20000,
      salaryAmount * (wantAllocationPercentage / 100) * (50 / 100)
    )
  );
  recommendedDataMap.set(
    wantCategories[1],
    Math.min(
      20000,
      salaryAmount * (wantAllocationPercentage / 100) * (50 / 100)
    )
  );

  recommendedDataMap.set(
    savingsCategories[0],
    (salaryAmount * equityAllocationPercentage) / 100
  );
  recommendedDataMap.set(
    savingsCategories[1],
    (salaryAmount * cryptoAllocationPercentage) / 100
  );
  recommendedDataMap.set(
    savingsCategories[2],
    (salaryAmount * debtAllocationPercentage) / 100
  );
  recommendedDataMap.set("Salary", salaryAmount);
  recommendedDataMap.set("Retirement Corpus", 1300000);
  recommendedDataMap.set("Monthly Savings", 1100);
  recommendedDataMap.set("Monthly Expenses at Retirement age", 20000);
  recommendedDataMap.set(
    "Information",
    "Inflation Rate is considered as 6%. ROI is considered as 8%."
  );
  return getChartData(recommendedDataMap);
}

function getChartData(recommendedDataMap) {
  const chartDataList = [];
  recommendedDataMap.forEach((value, key) => {
    let chartObject = new Object();
    chartObject["name"] = key;
    chartObject["value"] = value;
    chartObject["percentage"] =
      (value * 100) / recommendedDataMap.get("Salary");
    chartDataList.push(chartObject);
  });
  return chartDataList;
}
