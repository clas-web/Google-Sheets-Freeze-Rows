function freezesRows(){
  var totalSheetsCount = SpreadsheetApp.getActiveSpreadsheet().getNumSheets();
   for(var i = 0; i < totalSheetsCount; i++) {
      SpreadsheetApp.getActiveSpreadsheet().getSheets()[i].setFrozenRows(3);
   }
};