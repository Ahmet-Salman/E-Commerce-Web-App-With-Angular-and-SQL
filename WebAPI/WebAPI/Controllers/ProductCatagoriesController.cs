using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ProductCatagoriesController : ApiController
    {
        SqlConnection con = new SqlConnection ( ConfigurationManager.ConnectionStrings["ECommerceDb"].ConnectionString );
        [HttpGet]
        public HttpResponseMessage Get()
        {
            string query = @"SELECT ProductCatagoryId, ProductCatagory FROM dbo.ProductCatagories";
            DataTable table = new DataTable ();
            
            using ( var cmd = new SqlCommand(query, con) )
            using ( var da = new SqlDataAdapter (cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill ( table );
            }

            return Request.CreateResponse ( HttpStatusCode.OK, table );
        }

        [HttpPost]
        public string Post(ProductCatagories productCatagories)
        {
            try
            {
                string query = @"INSERT INTO ProductCatagories VALUES ('" + productCatagories.ProductCatagory + @"')";
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
        public string Put (ProductCatagories productCatagories)
        {
            try
            {
                string query = @"UPDATE ProductCatagories 
                                SET ProductCatagory = '" + productCatagories.ProductCatagory +
                                @"' WHERE ProductCatagoryId =" +
                                productCatagories.ProductCatagoryId +
                                @"";
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
        public string Delete (int ProductCatagoryId)
        {
            try
            {
                string query = @"DELETE FROM ProductCatagories WHERE ProductCatagoryId =" + ProductCatagoryId + @"";
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
    }
}
