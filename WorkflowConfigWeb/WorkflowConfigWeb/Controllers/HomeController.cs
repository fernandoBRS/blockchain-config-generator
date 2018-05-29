using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using WorkflowConfigWeb.Models;

namespace WorkflowConfigWeb.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var model = new HomeViewModel
            {
               Platforms = GetPlatforms()
            };

            return View(model);
        }

        private IEnumerable<BlockchainPlatform> GetPlatforms()
        {
            return new List<BlockchainPlatform>
            {
                new BlockchainPlatform
                {
                    Id = 0,
                    Title = "Ethereum"
                },
                new BlockchainPlatform
                {
                    Id = 1,
                    Title = "Hyperledger Fabric"
                },
                new BlockchainPlatform
                {
                    Id = 2,
                    Title = "Corda"
                }
            };
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
