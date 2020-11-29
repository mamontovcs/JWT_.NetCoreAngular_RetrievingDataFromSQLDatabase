using System.Collections.Generic;
using WebApp.Resourse.DatabaseAccess.Models;

namespace WebApp.Resourse.DatabaseAccess
{
    public interface IRepository
    {
        List<FormAnswer> GetFormAnswers();

        List<Account> GetAccounts();

        void AddAnswer(string technology, string answer1, string answer2, string answer3);
    }
}
