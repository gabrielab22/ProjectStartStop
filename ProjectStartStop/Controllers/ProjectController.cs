using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using ProjectStartStop.Entitet;
using ProjectStartStop.interfaces;
using ProjectStartStop.Model;

namespace ProjectStartStop.Controllers
{
    [ApiController]
    [Route("[controller]")]

    
    public class ProjectController : ControllerBase
    {
        private readonly IProjectService projectService;
        
        public ProjectController(IProjectService projectService) {
            this.projectService = projectService;
        }

        [HttpPost]
        public async Task<ActionResult<Project>> AddProject(ProjectModel projectDto)
        {

            var result = await projectService.AddProject(projectDto);

            if (result == null)
            {
                //throw a meaningful exception or give some useful feedback to the user!
                return null;
            }

            return Ok(result);
        }

        [HttpGet]
        public async Task<List<Project>> GetAllProjects()
        {

            var result = await projectService.GetAll();

            if (result == null)
            {
                //throw a meaningful exception or give some useful feedback to the user!
                return null;
            }

            return result;
        }

    }
}
