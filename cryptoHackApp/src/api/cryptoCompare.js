export default {

    getHistory(id, currency, limit) {
        return fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${id}&tsym=${currency}&limit=${limit}&aggregate=1`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        })
    }

}