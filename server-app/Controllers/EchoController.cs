using Microsoft.AspNetCore.Mvc;

namespace server_app.Controllers;
[ApiController]
[Route("api/[controller]")]
public class EchoController : Controller
{
    [Route("GetEcho")]
    public string GetEcho()
    {
        return "Hello world";
    }
}

