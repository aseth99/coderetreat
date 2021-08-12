using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using MediatR;

namespace coderetreat.Ping

{
    [ApiController]
    [Route("[controller]")]
    public class PingController : ControllerBase
    {
        // private static readonly string Pong = "Pong";
        private readonly ILogger<PingController> _logger;
        private readonly IMediator _mediator;
        // public PingController(ILogger<PingController> logger)
        public PingController(ILogger<PingController> logger, IMediator mediator)
        {
            _logger = logger;
            _mediator = mediator;
        }
        [HttpGet]
        // public string Get()
        public async Task<PingQueryResponse> GetPingAsync()
        {
            // return Pong;
            return await _mediator.Send(new PingQuery());
        }
    }
}