using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using AuthServer.Common;
using AuthServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WebApp.Resourse.DatabaseAccess;
using WebApp.Resourse.DatabaseAccess.Models;

namespace AuthServer.Controllers
{
    public class AuthController : Controller
    {
        private readonly IOptions<AuthOptions> authOptions;

        private readonly IRepository _repository;
        public AuthController(IOptions<AuthOptions> authOptions, IRepository repository)
        {
            this.authOptions = authOptions;
            this._repository = repository;
        }

        [Route("login")]
        [HttpPost]
        public IActionResult Login([FromBody] Login request)
        {
            var user = AuthenticateUser(request.Email, request.Password);

            if (user != null)
            {
                var token = GenerateJWT(user);

                return Ok(new
                {
                    access_token = token
                });
            }

            return Unauthorized();
        }

        private string GenerateJWT(Account user)
        {
            var authParams = authOptions.Value;

            var securityKey = authParams.GetSymetricSecurityKey();
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                 new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            };

            claims.Add(new Claim("role", user.Role.ToString()));

            var token = new JwtSecurityToken(authParams.Issuer,
                authParams.Audience, claims, expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private Account AuthenticateUser(string email, string password)
        {
            return _repository.GetAccounts().SingleOrDefault(x => x.Email == email && x.Password == password);
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
