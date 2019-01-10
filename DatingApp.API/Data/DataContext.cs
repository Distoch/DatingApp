using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext // Ce fichier va être utilisé par Entity Framework pour créer les fichiers de migration qui mappent la bdd
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)  { }

        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }
    }
}