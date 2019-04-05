
using System.Collections.Generic;

namespace BTC.Models
{
    public class OrderBook
    {

        public List<Order> listOrderBid { get; set; }

        public List<Order> listOrderAsk { get; set; }

        public OrderBook()
        {
            listOrderBid = new List<Order>();
            listOrderAsk = new List<Order>();
        }

    }
}