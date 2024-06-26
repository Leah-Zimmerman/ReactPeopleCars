namespace ReactPeopleCars.Data
{
    public class PersonCarRepository
    {
        private string _connectionString;
        public PersonCarRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
    }
}