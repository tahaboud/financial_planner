import * as excelToJson from "convert-excel-to-json"
export function getInitialChartData() {

}

export function uploadExcelAndGetChartData(file) {
    const result = excelToJson({
        sourceFile: file,
        sheets:['Bank Transactions'],
        columnToKey: {
            A: 'Category',
            B: 'Amount'
        }
    });
    const dataMap = new Map();
    const totalExpenditure = 0;
    result['Bank Transactions'].forEach((row) => {
        if(row['Category'].includes('Amazon') ) {
            if(!dataMap.has('Shopping')) {
                dataMap.set('Shopping', 0);
            }
            dataMap.set('Shopping', dataMap.get('Shopping') + row['Amount']);
        }
        else if(row['Category'].includes('Trip') ) {
            if(!dataMap.has('Travel')) {
                dataMap.set('Travel', 0);
            }
            dataMap.set('Travel', dataMap.get('Travel') + row['Amount']);
        }
        else if(row['Category'].includes('Food') ) {
            if(!dataMap.has('Food')) {
                dataMap.set('Food', 0);
            }
            dataMap.set('Food', dataMap.get('Food') + row['Amount']);
        }
        else if(row['Category'].includes('Stocks') || row['Category'].includes('Deposits')) {
            if(!dataMap.has('Savings')) {
                dataMap.set('Savings', 0);
            }
            dataMap.set('Savings', dataMap.get('Savings') + row['Amount']);
        }
        if(!row['Category'].includes('Salary')) {
            totalExpenditure += row['Amount'];
        }
    })
    return dataMap;
}

export function getRecommendedPlan(dataMap, monthlyEMI, ageToRetire, numberOfKids, age) {
    const needAllocationPercentage = 50;
    const wantAllocationPercentage = 30;
    const savingsAllocationPercentage = 20;
    const equityAllocationPercentage = savingsAllocationPercentage * ((100-age)/100);
    const cryptoAllocationPercentage = savingsAllocationPercentage * (100 - equityAllocationPercentage) * (50/100);
    const debtAllocationPercentage = savingsAllocationPercentage * (100 - equityAllocationPercentage)* (50/100);

    let needCategories = ['Food', 'Fuel'];
    let wantCategories = ['Travel', 'Shopping']
    let savingsCategories = ['Equity', 'Crypto', 'Debt'];

    let salaryAmount = dataMap.get('Salary');
    const recommendedDataMap = new Map();
    recommendedDataMap.set(needCategories[0], Math.min(dataMap.get(needCategories[0]), salaryAmount * (needAllocationPercentage/100) * (60/100)));
    recommendedDataMap.set(needCategories[1], Math.min(dataMap.get(needCategories[1]), salaryAmount * (needAllocationPercentage/100) * (40/100)))

    recommendedDataMap.set(wantCategories[0], Math.min(dataMap.get(wantCategories[0]), salaryAmount * (wantAllocationPercentage/100) * (50/100)));
    recommendedDataMap.set(wantCategories[1], Math.min(dataMap.get(wantCategories[1]), salaryAmount * (wantAllocationPercentage/100) * (50/100)))

    recommendedDataMap.set(savingsCategories[0], salaryAmount*equityAllocationPercentage/100);
    recommendedDataMap.set(savingsCategories[1], salaryAmount*cryptoAllocationPercentage/100);
    recommendedDataMap.set(savingsCategories[2], salaryAmount*debtAllocationPercentage/100);
    recommendedDataMap.set('Salary', salaryAmount);
}

function getChartData() {
    const chartData = new Object();

}

