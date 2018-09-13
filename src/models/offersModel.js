/**
* @param  offers The offers to be search
* @param  amounts  The amounts to filter
* @param  order  The ordenation of the return, can be 'asc' or 'desc', default is 'asc'
*
* @return {array}  An array of the matches results
*/
function searchOffersByAmount(offers, amounts, order) {
    var matchOffers = [];
    if (amounts && offers) {
        try {
            if (typeof amounts != 'object') {
                amounts = [amounts]; //When searching only one amount
            }
            amounts.map(amount => {
                match = offers.filter(offer => offer[1] == amount);
                if (match) {
                    matchOffers = matchOffers.concat(match);
                }
            });

            if (!order || order === 'asc') {
                matchOffers = matchOffers.sort((a, b) => { return a[0] - b[0] }); //index 0 === price
            } else {
                matchOffers = matchOffers.sort((a, b) => { return b[0] - a[0] });
            }
        } catch (error) {
            console.error(`Error searching offers by amount: `, error)
            return [];
        }
    } else {
        return [];
    }
    return matchOffers;

}

module.exports = searchOffersByAmount;
