
using BTC.Models;
using System;
using System.Net;
using System.Net.Http;

namespace BTC.Util
{
    public class HttpResponseUtil
    {
        /// <summary>
        /// Method for create a custom HttpResponseMessage
        /// </summary>
        /// <param name="request">Request from http call</param>
        /// <param name="status">http status code of response</param>
        /// <param name="data">object to send inside response</param>
        /// <param name="message">message to send inside response</param>
        /// <returns></returns>
        public static HttpResponseMessage createNewResponse(HttpRequestMessage request,
            HttpStatusCode status, Object data, String message="")
        {
            ResponseObj objResponse = new ResponseObj(message, data);
            if (status == HttpStatusCode.OK)
            {
                objResponse.Code = HttpStatusCode.OK.GetHashCode();
                return request.CreateResponse(HttpStatusCode.OK, objResponse);
            }
            if (status == HttpStatusCode.BadRequest)
            {
                objResponse.Code = HttpStatusCode.BadRequest.GetHashCode();
                return request.CreateErrorResponse(HttpStatusCode.BadRequest, message);
            }
            objResponse.Code = HttpStatusCode.InternalServerError.GetHashCode();
            return request.CreateErrorResponse(HttpStatusCode.InternalServerError, message);
        }
    }
}