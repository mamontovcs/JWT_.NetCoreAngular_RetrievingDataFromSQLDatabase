using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
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

        [HttpPost]
        [Route("create")]
        [Authorize(Roles = "User")]
        public IActionResult AddAnswer([FromBody] FormAnswer formAnswer)
        {
            _repository.AddAnswer(formAnswer.Technology, formAnswer.Answer1, formAnswer.Answer2, formAnswer.Answer3);
            return Ok();
        }

        [HttpGet]
        [Route("getDesirable")]
        [Authorize(Roles = "Admin")]
        public JsonResult GetDesirableTechnology()
        {
            string technology = "";
            var answers = _repository.GetFormAnswers();
            if (answers.Count > 0)
            {
                technology = _repository.GetFormAnswers().
                   GroupBy(x => x?.Technology).OrderByDescending(g => g?.Count()).First().Key;
            }

            return Json(technology);
        }
    }
}
