using MediatR;
namespace coderetreat.Ping
{
    public class PingQuery : IRequest<PingQueryResponse>
    {
    }
    public class PingQueryResponse
    {
        public string Message { get; set; }
        public string Error { get; set; }
        public bool Succeeded { get; set; }
    }
}