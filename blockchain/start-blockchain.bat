@echo off
geth --nat extip:192.168.1.107 --ws --ws.api eth,miner,net,web3,admin,personal --networkid 15 --datadir data-1 --allow-insecure-unlock console