using System.Collections.Generic;
using WebApi.Models;


namespace WebApi.Repository
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GettAll();
        IEnumerable<Order> Find(List<int> idListLong);
    }
}