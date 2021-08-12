using System;
using System.Threading;
using System.Threading.Tasks;
using coderetreat.Ping;
using Xunit;
namespace coderetreat.tests
{
    public class PingHandlerTests
    {
        [Fact]
        public async Task Test_Ping_Handler()
        {
            var expected = "Pong";
            var request = new PingQuery();
            var handler = new PingQueryHandler();
            var result = await handler.Handle(request, new CancellationToken());
            Assert.Equal(expected, result.Message);
        }
    }
}