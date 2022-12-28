namespace ProjectStartStop.Model
{
    public class ProjectModel
    {   
        public Guid Id{ get; set; }
        public string? Name { get; set; }
        public DateTime StartProject { get; set; }
        public DateTime EndProject { get; set; }
        public DateTime Duration { get; set; }
    }
}
