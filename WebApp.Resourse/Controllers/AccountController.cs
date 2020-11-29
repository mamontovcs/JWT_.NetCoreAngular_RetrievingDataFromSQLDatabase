using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApp.Resourse.DatabaseAccess;
using WebApp.Resourse.DatabaseAccess.Models;

namespace WebApp.Resourse.Controllers
{
    [Route("accounts")]
    public class AccountController : Controller
    {
        private readonly IRepository _repository;

        private long UserId => long.Parse(User.Claims.Single(x => x.Type == ClaimTypes.NameIdentifier).Value);

        public AccountController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Authorize(Roles = "User")]
        [Route("getAccounts")]
        public IActionResult GetAccounts()
        {
            var account = _repository.GetAccounts().FirstOrDefault(x => x.Id == UserId);

            if (account == null)
            {
                return Ok(Enumerable.Empty<Account>());
            }

            return Ok(account);
        }
    }
}
