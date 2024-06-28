using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleCars.Data;

namespace ReactPeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("getAll")]
        public List<Person> GetAll()
        {
            var repo = new PersonCarRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpPost]
        [Route("addPerson")]
        public void AddPerson(Person p)
        {
            var repo = new PersonCarRepository(_connectionString);
            repo.AddPerson(p);
        }
        [Route("getPersonNameById")]
        public string GetPersonNameById(int id)
        {
            var repo = new PersonCarRepository(_connectionString);
            return repo.GetPersonNameById(id);
        }
        [HttpPost]
        [Route("submitCar")]
        public void SubmitCar(CarWithPersonId cwpi)
        {
            var repo = new PersonCarRepository(_connectionString);
            repo.AddCar(cwpi.Car, cwpi.Id);
        }
        [Route("getCarsForPerson")]
        public List<Car> GetCarsForPerson(int id)
        {
            var repo = new PersonCarRepository(_connectionString);
            return repo.GetCarsForPerson(id);
        }
        [HttpPost]
        [Route("deleteCars")]
        public void DeleteCars(int id)
        {
            var repo = new PersonCarRepository(_connectionString);
            repo.DeleteCars(id);
        }
    }
    public class CarWithPersonId
    {
        public Car Car { get; set; }
        public int Id { get; set; }
    }
}
