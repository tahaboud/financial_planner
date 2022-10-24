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
        else if(row['Category'].includes('trip') ) {
            if(!dataMap.has('trip')) {
                dataMap.set('trip', 0);
            }
            dataMap.set('trip', dataMap.get('trip') + row['Amount']);
        }
        else if(row['Category'].includes('food') ) {
            if(!dataMap.has('food')) {
                dataMap.set('food', 0);
            }
            dataMap.set('food', dataMap.get('food') + row['Amount']);
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
}

export function getRecommendedPlan() {
    
}

function getChartData() {
    const chartData = new Object();

}

