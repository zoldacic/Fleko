using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fleko2.Helpers
{
    public class SEBTransaction
    {
        public DateTime TransactionDate { get; set; }
        public int Amount { get; set; }
        public string Description { get; set; }
    }
}