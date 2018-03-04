export default {

    getHistory(id, currency, limit) {
        return fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${id}&tsym=${currency}&limit=${limit}&aggregate=1`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        }).then( statusHelper)
          .then(response => response.json())
    },
    getCoinList() {
        return fetch("https://www.cryptocompare.com/api/data/coinlist", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        }).then( statusHelper)
          .then(response => response.json())
    },

}


function statusHelper(response){
    if( response.status >= 200 && response.status < 300 ){
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}