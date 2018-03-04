export default {

    getTopTen() {
        return fetch("https://api.coinmarketcap.com/v1/ticker/?limit=10", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        })
    },

    getTopHundred() {
        return fetch("https://api.coinmarketcap.com/v1/ticker/?limit=100", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        })
    },

    getCurrentPrice(id) {
        return fetch(`https://api.coinmarketcap.com/v1/ticker/${id}/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            credentials: 'include',
        })
    }

}