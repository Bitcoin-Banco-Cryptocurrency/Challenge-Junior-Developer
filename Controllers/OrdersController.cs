using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Repository;

namespace WebApi.Controllers
{
    [Route("api/[controller]/[action]")]

    public class OrdersController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        public OrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        [ActionName("GetAll")]
        public IEnumerable<Order> GetAll()
        {
            return _orderRepository.GettAll();
        }

        [HttpGet("{idList}", Name = "GetOrder")]
        [ActionName("GetOrders")]
        public IActionResult GetById(string idList)
        {
            String[] elements = idList.Split("+");
            List<int> idListLong = new List<int>();

            for (int i = 0; i < elements.Count(); i++)
            {
                idListLong.Add(Int32.Parse(elements[i]));
            }

            var orders = _orderRepository.Find(idListLong);
            if (orders == null)
                return NotFound();

            return new ObjectResult(orders);
        }

        [HttpGet]
        [ActionName("GetAllDesc")]
        public IEnumerable<Order> GetAllDesc()
        {
            return _orderRepository.GettAll().OrderByDescending(x => x.price);
        }

        [HttpGet]
        [ActionName("GetAllAsc")]
        public IEnumerable<Order> GetAllAsc()
        {
            return _orderRepository.GettAll().OrderBy(x => x.price);
        }
    }

}
