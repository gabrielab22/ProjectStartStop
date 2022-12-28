using Microsoft.EntityFrameworkCore;
using ProjectStartStop.Entitet;

namespace ProjectStartStop.Data
{
    public class ProjectDbContext : DbContext
    {
        public ProjectDbContext(DbContextOptions<ProjectDbContext> options) : base(options)
        {}

        public DbSet<Project> Projects { get; set; }
    }
}
