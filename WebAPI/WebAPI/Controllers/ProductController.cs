using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ProductController : ApiController
    {
        SqlConnection con = new SqlConnection ( ConfigurationManager.ConnectionStrings["ECommerceDb"].ConnectionString );
        [HttpGet]
        public HttpResponseMessage Get ()
        {
            string query = @"SELECT Id, ProductName, Price, Catagory, Quantity, PhotoFileName FROM dbo.products";
            DataTable table = new DataTable ();

            using ( var cmd = new SqlCommand ( query, con ) )
            using ( var da = new SqlDataAdapter ( cmd ) )
            {
                cmd.CommandType = CommandType.Text;
                da.Fill ( table );
            }

            return Request.CreateResponse ( HttpStatusCode.OK, table );
        }

        [HttpPost]
        public string Post (Product product)
        {
            try
            {
                string query = @"INSERT INTO products VALUES 
                (
                '" + product.ProductName + @"'
                ,'" + product.Price + @"'
                ,'" + product.Catagory + @"'
                ,'" + product.Quantity + @"'
                ,'" + product.PhotoFileName + @"'
                )";
                DataTable table = new DataTable ();
                using ( var cmd = new SqlCommand ( query, con ) )
                using ( var da = new SqlDataAdapter ( cmd ) )
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill ( table );
                }

                return "Added Successfully";

            }
            catch ( Exception )
            {

                return "Failed to Add";
            }
        }

        [HttpPut]
        public string Put (Product product)
        {
            try
            {
                string query = @"UPDATE products 
                                SET 
                                ProductName = '" + product.ProductName + @"' 
                                ,Price = '" + product.Price + @"'
                                ,Catagory = '" + product.Catagory + @"'
                                ,Quantity = '" + product.Quantity + @"'
                                ,PhotoFileName = '" + product.PhotoFileName + @"'
                                WHERE Id =" + product.Id + @"";
                DataTable table = new DataTable ();
                using ( var cmd = new SqlCommand ( query, con ) )
                using ( var da = new SqlDataAdapter ( cmd ) )
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill ( table );
                }

                return "Updated Successfully";

            }
            catch ( Exception )
            {

                return "Failed to Update";
            }
        }

        [HttpDelete]
        public string Delete (int ProductId)
        {
            try
            {
                string query = @"DELETE FROM products WHERE Id =" + ProductId + @"";
                DataTable table = new DataTable ();
                using ( var cmd = new SqlCommand ( query, con ) )
                using ( var da = new SqlDataAdapter ( cmd ) )
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill ( table );
                }

                return "Deleted Successfully";

            }
            catch ( Exception )
            {

                return "Failed to Delete";
            }
        }

        [Route( "api/Product/GetAllCatagories" )]
        [HttpGet]
        public HttpResponseMessage GetAllCatagories ()
        {
            string query = @"SELECT ProductCatagory FROM ProductCatagories";

            DataTable table = new DataTable ();
            using ( var cmd = new SqlCommand ( query, con ) )
            using ( var da = new SqlDataAdapter ( cmd ) )
            {
                cmd.CommandType = CommandType.Text;
                da.Fill ( table );
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        [Route( "api/Product/SaveFile" )]
        public string SaveFile ()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath ( "~/Photos/" + fileName );

                postedFile.SaveAs ( physicalPath );
                return fileName;
            }
            catch ( Exception )
            {

                return "anonymous.png";
            }
        }
    }
}
