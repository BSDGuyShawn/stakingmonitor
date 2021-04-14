# walletmonitor
Monitor DIVI Wallet and alert on staking or masternode rewards.

# usage
Create a file called address.json in this directory replacing the string YOURDIVIADDRESS with the DIVI address you would like to monitor.

```
{
    "address":"YOURDIVIADDRESS"
}
```

To run create a crontab entry as follows, changing the path to reflect your path to the node executable and the location of the index.js file.
```
*/5 * * * * /usr/local/bin/node /Users/shawn/Development/walletmonitor/index.js > /dev/null 2>&1
```

This will run the monitor every 5 minutes redirecting all output to /dev/null