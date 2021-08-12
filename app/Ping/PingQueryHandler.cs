using System.Threading;
using System.Threading.Tasks;
using MediatR;
namespace coderetreat.Ping
{
    public class PingQueryHandler : IRequestHandler<PingQuery, PingQueryResponse>
    {
        private static readonly string Pong = "Pong";
        private static readonly string ErrorResult = "no error";
        private static readonly bool SucceededResult = true;
        public Task<PingQueryResponse> Handle(PingQuery request, CancellationToken cancellationToken)
        {
            return Task.FromResult(new PingQueryResponse
            {
                Message = Pong,
                Error = ErrorResult,
                Succeeded = SucceededResult
            });
        }
    }
}