
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net;
using System.Web.Http;

using BTC.Models;
using BTC.Operations;
using BTC.Util;

namespace BTC.Controllers
{
    public class OrderBookController : ApiController
    {

        /// <summary>
        /// get an up-to-date and filtered (opcional) order book
        /// </summary>
        /// <param name="amountList">amount values to filter</param>
        /// <param name="orderBy">>orderbook ordering (ASC/DESC)</param>
        /// <returns></returns>
        [HttpPost]
        public HttpResponseMessage GetOrderBook([FromBody] List<Double> amountList, [FromUri] String orderBy = "")
        {
            OrderBook orderBook;
            Tuple<Boolean, String, OrderBook> tuple = OrderBookOperations.OrderBookCharger();
            orderBook = tuple.Item3;
            if (!tuple.Item1)
            {
                return HttpResponseUtil.createNewResponse(Request, HttpStatusCode.BadRequest, orderBook, tuple.Item2);
            }

            orderBook = OrderBookOperations.ApplyFilter(orderBook, amountList, orderBy);

            return HttpResponseUtil.createNewResponse(Request, HttpStatusCode.OK, orderBook);
        }
    }
}