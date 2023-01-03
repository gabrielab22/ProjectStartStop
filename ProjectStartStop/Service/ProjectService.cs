using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using ProjectStartStop.Data;
using ProjectStartStop.Entitet;
using ProjectStartStop.interfaces;
using ProjectStartStop.Model;

namespace ProjectStartStop.Service
{
    public class ProjectService : IProjectService
    {

        private readonly ProjectDbContext dbContext;

        public ProjectService(ProjectDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<Project> AddProject(Project model)
        {
            var project = new Project()
            {
               Name = model.Name,
               Start =  model.Start,
               End = model.End,
               Duration = model.Duration, 
            };

            dbContext.Projects.Add(project);
            await dbContext.SaveChangesAsync();

            return project;
        }

        public async Task<List<Project>> GetAll() 
        {
            var result = await dbContext.Projects.ToListAsync();

            return result;
        }
    }
}
