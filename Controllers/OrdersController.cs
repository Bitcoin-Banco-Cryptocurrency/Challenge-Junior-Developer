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
    [Route("api/[controller]")]

    public class OrdersController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        public OrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        public IEnumerable<Order> GetAll()
        {
            return _orderRepository.GettAll();
        }

        [HttpGet("{parameter}", Name = "GetOrder")]
        public IActionResult GetById(string parameter)
        {
            if (parameter == "asc")
                return new ObjectResult(_orderRepository.GettAll().OrderBy(x => x.price));
            else if (parameter == "desc")
                return new ObjectResult(_orderRepository.GettAll().OrderByDescending(x => x.price));

            String[] elements = parameter.Split(",");
            List<int> idList = new List<int>();

            for (int i = 0; i < elements.Count(); i++)
            {
                idList.Add(Int32.Parse(elements[i]));
            }

            var orders = _orderRepository.Find(idList);
            if (orders == null)
                return NotFound();

            return new ObjectResult(orders);
        }
    }

}
