using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    // for the employee class
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string Catagory { get; set; } // this is department
        public int Quantity { get; set; }
        public string PhotoFileName { get; set; }
    }
}