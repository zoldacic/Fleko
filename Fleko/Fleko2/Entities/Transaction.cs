using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fleko2.Entities
{
    public class Transaction
    {
        public int? Id { get; set; }
        public int Amount { get; set; }
        public DateTime TransactionDate { get; set; }
        public string Description { get; set; }
        public string Tags { get; set; }
        public DateTime Created { get; set; }
        public DateTime Changed { get; set; }                
    }
}