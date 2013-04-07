using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Fleko2.Entities;
using Fleko2.Helpers;
using Fleko2.Models;

namespace Fleko2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase file)
        {
            IEnumerable<Transaction> transactions = new List<Transaction>();
            if (file != null && file.ContentLength > 0)
            {
                var fileName = Path.GetFileName(file.FileName);
                var path = Path.Combine(Server.MapPath("~/"), fileName);
                file.SaveAs(path);

                transactions = ExcelReader.GetExcelData(path);
            }

            var model = new TransactionContainerModel() { Transactions = transactions };
            return View("Editor", model);
        }
    }
}
