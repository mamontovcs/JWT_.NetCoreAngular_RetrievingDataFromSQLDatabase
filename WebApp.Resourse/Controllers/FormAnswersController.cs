using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApp.Resourse.DatabaseAccess;
using WebApp.Resourse.DatabaseAccess.Models;

namespace WebApp.Resourse.Controllers
{
    [Route("answers")]
    public class FormAnswersController : Controller
    {
        private readonly IRepository _repository;

        public FormAnswersController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("getAnswers")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetAnswers()
        {
            return Ok(_repository.GetFormAnswers());
        }

        [Route("create")]
        [HttpPost]
        public IActionResult AddAnswer([FromBody]FormAnswer formAnswer)
        {
            _repository.AddAnswer(formAnswer.Technology, formAnswer.Answer1, formAnswer.Answer2, formAnswer.Answer3);
            return Ok();
        }
    }
}
