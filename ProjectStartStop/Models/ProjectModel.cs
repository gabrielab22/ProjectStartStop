namespace ProjectStartStop.Model
{
    public class ProjectModel
    {   
        public Guid Id{ get; set; }
        public string? Name { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public string Duration { get; set; }
    }
}
