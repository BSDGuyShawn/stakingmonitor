const https = require('https');
var fs = require('fs');
var player = require('play-sound')(opts = {})

const diviAddress = require( __dirname + '/address.json');

let apiKey;
// The following is only required if you have requested an API key at cryptoid.info.
try {
    apiKey = require( __dirname + '/apikey.json');
    // do stuff
} catch (ex) {
    console.log(`API Key not found. Requests may be rate limited!\n ${ex}`);
}

let url = '';

if ( typeof apiKey === 'undefined' ) {
    url = `https://chainz.cryptoid.info/divi/api.dws?a=${diviAddress['address']}&q=getbalance`;
} else {
    url = `https://chainz.cryptoid.info/divi/api.dws?key=${apiKey['key']}&a=${diviAddress['address']}&q=getbalance`;
}

https.get(url, (response) => {
    let todo = '';

    // called when a data chunk is received.
    response.on('data', (chunk) => {
        todo += chunk;
    });

    // called when the complete response is received.
    response.on('end', () => {
        let lastBalance = '';
        fs.readFile( __dirname + '/lastbalance.txt', function (err, data) {
            if (err) {
                if (err.code === 'ENOENT') {
                console.log('File does not exist, creating...');
                fs.writeFileSync( __dirname + '/lastbalance.txt', todo.toString(), 'ascii' );
                lastBalance = todo;
                } else {
                    throw err;
                }
            } else {
                lastBalance = data.toString();
                if (lastBalance < todo) {
                    console.log('Balance increase!');
                    fs.writeFileSync( __dirname + '/lastbalance.txt', todo.toString(), 'ascii' );
                    player.play(__dirname + '/Cha_Ching_Register-Muska666-173262285.mp3', function (err) {
                        if (err) throw err;
                        console.log("Audio finished");
                      });
                }
            }
        });
    });

}).on("error", (error) => {
    console.log("Error: " + error.message);
});