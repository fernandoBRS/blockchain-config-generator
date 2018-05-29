using System.Collections.Generic;

namespace WorkflowConfigWeb.Models
{
    public class HomeViewModel
    {
        public IEnumerable<BlockchainPlatform> Platforms { get; set; }
    }

    public class BlockchainPlatform
    {
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
