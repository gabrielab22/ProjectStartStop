namespace ProjectStartStop.Entitet
{
    public class Project
    {
        public Guid Id  { get; set; }

        public string? Name { get; set; }

        public DateTime Start { get; set; }

        public DateTime End { get; set; }

        public DateTime Duration { get; set; }
    }
}
