using Microsoft.EntityFrameworkCore;
using CrudMvc.Models;
namespace CrudMvc.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {

        }
        public DbSet<Produto> Produtos { get; set; }
    }
}