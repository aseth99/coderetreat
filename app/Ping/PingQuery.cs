using MediatR;
namespace coderetreat.Ping
{
    public class PingQuery : IRequest<PingQueryResponse>
    {
    }
    public class PingQueryResponse
    {
        public string Message { get; set; }
    }
}