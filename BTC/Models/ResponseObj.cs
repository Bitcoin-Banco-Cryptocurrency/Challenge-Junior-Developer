
using System;

namespace BTC.Models
{
    /**
     * Response Informations
     */
    public class ResponseObj
    {
        public int Code { get; set; }
        public String Message { get; set; }
        public Object Data { get; set; }

        public ResponseObj() { }

        public ResponseObj(String Message, Object Data)
        {
            this.Message = Message;
            this.Data = Data;
        }

    }
}