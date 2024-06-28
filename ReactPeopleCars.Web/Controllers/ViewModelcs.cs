using Microsoft.AspNetCore.Mvc;
using ReactPeopleCars.Data;

namespace ReactPeopleCars.Web.Controllers
{
    public class ViewModelcs : Controller
    {
        public class CarWithPersonId
        {
            public Car Car { get; set; }
            public int Id { get; set; }
        }
       
    }
}
