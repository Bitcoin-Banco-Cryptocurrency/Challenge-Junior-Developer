using System.ComponentModel.DataAnnotations;

namespace WebApi.Models
{
    public class Order
    {
        [Key]
        public int IdOrder {get; set;}
        public decimal price {get;set;}
    }
}