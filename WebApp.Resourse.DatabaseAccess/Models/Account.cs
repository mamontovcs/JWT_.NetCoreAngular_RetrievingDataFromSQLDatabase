namespace WebApp.Resourse.DatabaseAccess.Models
{
    public class Account
    {
        public long Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public Role Role { get; set; }
    }

    public enum Role
    {
        User,
        Admin
    }
}
