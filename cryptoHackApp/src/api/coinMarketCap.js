export default {

    getTopTen() {
        return fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        }).then( statusHelper)
          .then(response => response.json())
    },

    getTopHundred() {
        return fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        }).then( statusHelper)
          .then(response => response.json())
    },

    getCurrentPrice(id) {
        return fetch(`https://api.coinmarketcap.com/v1/ticker/${id}/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        }).then( statusHelper)
          .then(response => response.json())
    }

}

function statusHelper(response){
    if( response.status >= 200 && response.status < 300 ){
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}