const fs = require('fs')
const instruments = JSON.parse(fs.readFileSync('instruments')).results
console.log(instruments);
console.log(instruments.length);
instruments.forEach((instrument) => {
  console.log(instrument.type + ": " + instrument.symbol + " | " + instrument.isin + " | " + instrument.name);
})



const axios = require('axios')
const qs = require('qs')
console.log('fetching');
axios.get("https://paper-data.lemon.markets/v1/ohlc/d1?isin=FR0010242511&from=2021-07-20T06:24:29.488Z",
  {
    headers: {'Authorization': 'Bearer ' + access_token}
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((e) => {
    console.log(e);
  });

return 0
const getInstruments = (access_token) => {
  axios.get("https://paper-data.lemon.markets/v1/ohlc/m1?isin=FR0000572646",
    {
      headers: {
        'Authorization': "Bearer " + access_token
      }
    })
    .then((response) => {
      console.log('here');
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });

}
const getOHLC = (access_token) => {
  axios.get("https://paper-data.lemon.markets/v1/ohlc/d1/",
    {
      headers: {'Authorization': "Bearer " + access_token}
    })
    .then((response) => {
      console.log(response.data);

      fs.writeFile('ohlc', JSON.stringify(response.data), err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
    })
    .catch((e) => {
      console.log(e);
    });
}
axios.post('https://auth.lemon.markets/oauth2/token', qs.stringify({
  client_id: CLIENT_ID,
  client_secret: 'CLIENT_SECRET,
  grant_type: 'client_credentials'
}))
  .then((response) => {
    // getInstruments(response.data.access_token)
    getOHLC(response.data.access_token)
  })
  .catch((e) => {
    console.log(e);
  });

