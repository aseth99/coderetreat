using System.Threading;
using System.Threading.Tasks;
using MediatR;
namespace coderetreat.Ping
{
    public class PingQueryHandler : IRequestHandler<PingQuery, PingQueryResponse>
    {
        private static readonly string Pong = "Pong";
        public Task<PingQueryResponse> Handle(PingQuery request, CancellationToken cancellationToken)
        {
            return Task.FromResult(new PingQueryResponse
            {
                Message = Pong
            });
        }
    }
}