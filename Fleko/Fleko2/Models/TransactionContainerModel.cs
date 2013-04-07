using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fleko2.Entities;

namespace Fleko2.Models
{
    public class TransactionContainerModel
    {
        public IEnumerable<Transaction> Transactions { get; set; }
    }
}