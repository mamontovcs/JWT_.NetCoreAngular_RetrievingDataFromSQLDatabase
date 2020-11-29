using System.Collections.Generic;
using System.Linq;
using WebApp.Resourse.DatabaseAccess.Models;

namespace WebApp.Resourse.DatabaseAccess
{
    public class Repository : IRepository
    {
        private readonly DatabaseContext _databaseContext;

        public Repository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void AddAnswer(string technology, string answer1, string answer2, string answer3)
        {
            _databaseContext.FormAnswers.Add(new FormAnswer()
            {
                Answer1 = answer1,
                Answer2 = answer2,
                Answer3 = answer3,
                Technology = technology
            });

            _databaseContext.SaveChanges();
        }

        public List<Account> GetAccounts()
        {
            return _databaseContext.Accounts.ToList();
        }

        public List<FormAnswer> GetFormAnswers()
        {
            return _databaseContext.FormAnswers.ToList();
        }
    }
}
