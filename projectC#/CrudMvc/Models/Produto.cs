using System.ComponentModel.DataAnnotations;
namespace CrudMvc.Models
{
    public class Produto
    {
        public int id{get;set;}
        [Required]
        public string Nome{get;set;} = string.Empty;

        [Required]
        public decimal preco{get;set;}
    }
}