using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fleko2.Entities;
using LinqToExcel;

namespace Fleko2.Helpers
{
    public static class ExcelReader
    {
        public static IEnumerable<Transaction> GetExcelData(string filename)
        {
            var excel = new ExcelQueryFactory(filename);

            var t = from c in excel.Worksheet<SEBTransaction>()
                               select c;

            var transactions = from c in excel.Worksheet<SEBTransaction>(0)
                               select new Transaction()
                               {
                                   Id = null,
                                   Amount = c.Amount,
                                   TransactionDate = c.TransactionDate,
                                   Description = c.Description
                               };

            return transactions;
        }
    }
}