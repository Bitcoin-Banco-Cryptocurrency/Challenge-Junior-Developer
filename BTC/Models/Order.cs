
using System;

namespace BTC.Models
{
    /**
     * Informations of an order
     */
    public class Order
    {

        public Double Price { get; set; }

        public Double Amount { get; set; }

        public OrderType TypeOf { get; set; }

        public Order() { }

        public Order(Double Price, Double Amount, OrderType TypeOf) {
            this.Price = Price;
            this.Amount = Amount;
            this.TypeOf = TypeOf;
        }

    }
}