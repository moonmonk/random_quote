const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#';

console.log('ran');
const gat = () => {
    axios.get(url, {headers: {'Origin': 'https://relieved-tile.glitch.me/'}}).then((response) => {
      document.getElementById("quote").innerHTML = response.quoteText;
      console.log('happening')
    }).catch((error) => {
      console.log(error);
    })
}