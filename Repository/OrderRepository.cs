using System.Collections.Generic;
using System.Linq;
using WebApi.Models;

namespace WebApi.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly OrderDbContext _context;
        public OrderRepository(OrderDbContext ctx)
        {
            _context = ctx;
        }
        public IEnumerable<Order> Find(List<int> idListLong)
        {
            return _context.Orders.Where(o => idListLong.Contains(o.IdOrder)).ToList();
        }

        public IEnumerable<Order> GettAll()
        {
            return _context.Orders.ToList();
        }

    }
}