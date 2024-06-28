using Microsoft.EntityFrameworkCore;

namespace ReactPeopleCars.Data
{
    public class PersonCarRepository
    {
        private string _connectionString;
        public PersonCarRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAll()
        {
            using var context = new PersonDbContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }

        public void AddPerson(Person p)
        {
            using var context = new PersonDbContext(_connectionString);
            context.People.Add(p);
            context.SaveChanges();
        }
        public string GetPersonNameById(int id)
        {
            using var context = new PersonDbContext(_connectionString);
            var person = context.People.FirstOrDefault(p => p.Id == id);
            return person.FirstName;            
        }
        public void AddCar(Car c,int id)
        {
            using var context = new PersonDbContext(_connectionString);
            var person = context.People.FirstOrDefault(p => p.Id == id);
            if(person.Cars==null)
            {
                person.Cars = new List<Car>();
            }
            person.Cars.Add(c);
            context.SaveChanges();
        }
        public List<Car> GetCarsForPerson(int id)
        {
            using var context = new PersonDbContext(_connectionString);
            var cars = context.Cars.Where(c => c.PersonId == id).ToList();
            return context.Cars.Where(c => c.PersonId == id).ToList();
        }
        public void DeleteCars(int id)
        {
            using var context = new PersonDbContext(_connectionString);
            var carsToRemove = context.Cars.Where(c => c.PersonId == id).ToList();
            context.RemoveRange(carsToRemove);
            context.SaveChanges();
        }
    }
}