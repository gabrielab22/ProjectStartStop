using ProjectStartStop.Entitet;
using ProjectStartStop.Model;

namespace ProjectStartStop.interfaces
{
    public interface IProjectService
    {
        Task<Project> AddProject(Project model);

        Task<List<Project>> GetAll();
    }
}