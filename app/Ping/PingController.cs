using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace coderetreat.Ping
{
    [ApiController]
    [Route("[controller]")]
    public class PingController : ControllerBase
    {
        private static readonly string Pong = "Pong";
        private readonly ILogger<PingController> _logger;
        public PingController(ILogger<PingController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public string Get()
        {
            return Pong;
        }
    }
}