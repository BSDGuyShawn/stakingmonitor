# stakingmonitor
Monitor DIVI Wallet and alert on staking or masternode rewards.

This can be easily modified to monitor any cryptocurrency that chainz.cryptoid.info supports.

# usage
Create a file called address.json in this directory replacing the string YOURDIVIADDRESS with the DIVI address you would like to monitor.

```
{
    "address":"YOURDIVIADDRESS"
}
```

Create a file called apikey.json in this directory replacing the string YOURAPIKEY with the API key from https://chainz.cryptoid.info/api.dws.

```
{
    "key":"YOURAPIKEY"
}
```


To run create a crontab entry as follows, changing the path to reflect your path to the node executable and the location of the index.js file.
```
*/5 * * * * /usr/local/bin/node /Users/shawn/Development/stakingmonitor/index.js > /dev/null 2>&1
```

This will run the monitor every 5 minutes redirecting all output to /dev/null