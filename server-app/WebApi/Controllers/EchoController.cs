using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EchoController : Controller
{
    [HttpGet(Name = "GetEcho")]
    public string GetEcho()
    {
        return "Hello world";
    }
}