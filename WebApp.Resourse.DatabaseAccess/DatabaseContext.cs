using Microsoft.EntityFrameworkCore;
using WebApp.Resourse.DatabaseAccess.Models;

namespace WebApp.Resourse.DatabaseAccess
{
    public class DatabaseContext : DbContext
    {
        public DbSet<FormAnswer> FormAnswers { get; set; }

        public DbSet<Account> Accounts { get; set; }

        public DatabaseContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=FormAnswers;Integrated Security=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
