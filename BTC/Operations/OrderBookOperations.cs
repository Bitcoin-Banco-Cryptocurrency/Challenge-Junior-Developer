
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

using BTC.Models;

namespace BTC.Operations
{
    public class OrderBookOperations
    {

        /// <summary>
        /// Method to get values from json file and convert to c# entity
        /// </summary>
        /// <returns>Tuple Object, Tuple(Boolean, String, OrderBook)</returns>
        public static Tuple<Boolean, String, OrderBook> OrderBookCharger()
        {
            Boolean workSuccessful = false;
            String errorMessage = "";
            OrderBook orderBook = new OrderBook();

            try
            {
                using (StreamReader r = new StreamReader(System.AppContext.BaseDirectory + "/Data/OrderBook.json"))
                {
                    string json = r.ReadToEnd();
                    JObject data = (JObject)JsonConvert.DeserializeObject(json);

                    JToken orderBids = data.SelectToken("bids");
                    JToken orderAsks = data.SelectToken("asks");

                    foreach (JToken jsonOrder in orderBids)
                    {
                        Double value = Double.Parse(jsonOrder[0].ToString());
                        Double amount = Double.Parse(jsonOrder[1].ToString());
                        orderBook.listOrderBid.Add(new Order(value, amount, OrderType.BID));
                    }

                    foreach (var jsonOrder in orderAsks)
                    {
                        Double value = Double.Parse(jsonOrder[0].ToString());
                        Double amount = Double.Parse(jsonOrder[1].ToString());
                        orderBook.listOrderAsk.Add(new Order(value, amount, OrderType.ASK));
                    }

                    workSuccessful = true;
                }
            }
            catch (FileNotFoundException ex)
            {
                workSuccessful = false;
                errorMessage = "The file in [" + System.AppContext.BaseDirectory + "/Data/OrderBook.json ] not founded! | Error:" + ex.Message;
                orderBook = null;
            }
            catch (Exception ex)
            {
                workSuccessful = false;
                errorMessage = "Unhandled Exception. Error: " + ex.Message;
                orderBook = null;
            }

            if (!orderBook.listOrderAsk.Any() && !orderBook.listOrderBid.Any())
            {
                workSuccessful = false;
                errorMessage = "OrderBook is empty!";
                orderBook = null;
            }

            return new Tuple<Boolean, String, OrderBook>(workSuccessful, errorMessage, orderBook);
        }

        /// <summary>
        /// Method to filter OrderBook by some Amount and order by Price
        /// </summary>
        /// <param name="orderBook">orderbook to be filtered</param>
        /// <param name="listAmount">list with values to filter</param>
        /// <param name="orderBy">orderbook ordering</param>
        /// <returns></returns>
        public static OrderBook ApplyFilter(OrderBook orderBook, List<Double> listAmount, String orderBy)
        {
            if (listAmount == null)
            {
                listAmount = new List<Double>();
            }

            if (orderBy == null)
            {
                orderBy = "";
            }
            if (!orderBy.Equals("ASC") && !orderBy.Equals("DESC"))
            {
                orderBy = "";
            }

            // Filter by amount
            if (listAmount.Any() != false)
            {
                List<Order> filteredListOrderAsk = (List<Order>) orderBook.listOrderAsk.Where(amount => listAmount.Any(filterAmount => filterAmount.Equals(amount.Amount))).ToList();
                List<Order> filteredListOrderBid = (List<Order>) orderBook.listOrderBid.Where(amount => listAmount.Any(filterAmount => filterAmount.Equals(amount.Amount))).ToList();
                orderBook.listOrderAsk = filteredListOrderAsk;
                orderBook.listOrderBid = filteredListOrderBid;
            }

            // Filter Price by orderBy(ASC or DESC)
            if (orderBy.Equals("ASC"))
            {
                List<Order> ascListOrderAsk = orderBook.listOrderAsk.OrderBy(o => o.Price).ToList();
                List<Order> ascListOrderBid = orderBook.listOrderBid.OrderBy(o => o.Price).ToList();
                orderBook.listOrderAsk = ascListOrderAsk;
                orderBook.listOrderBid = ascListOrderBid;
            }
            else if (orderBy.Equals("DESC"))
            {
                List<Order> descListOrderAsk = orderBook.listOrderAsk.OrderByDescending(o => o.Price).ToList();
                List<Order> descListOrderBid = orderBook.listOrderBid.OrderByDescending(o => o.Price).ToList();
                orderBook.listOrderAsk = descListOrderAsk;
                orderBook.listOrderBid = descListOrderBid;
            }

            return orderBook;
        }


    }
}