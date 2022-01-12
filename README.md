# How to run backend for development?
+ In root directory, run `docker-compose up -d`

# How to set up quick test in local network?
## In project layer_contracts
  + Step 1: run `yarn hardhat node`
  + Step 2:  `yarn hardhat --network localhost test ./test/rebalancer/RebalancerV2.spec.ts` and copy rebalancer_address, create new record in database via swagger (after run backend, `http://localhost:3003/docs/`) or insert directly into database

## In this project: 
  + Step 1: After finish 3 steps above, run `yarn console:dev rebalancer ID` with ID is record id that was created in step 2.
  + Step 2: Don't forget to create some transaction
    



# List Contract Deployed on Rinkeby:
  + BPK: 0x4A686cF96e7fDE2DEB21f347f7014cff66368E4e
  + UET: 0xB2dF6E4672a8A599259f5ce44a896Ad38bEC1f2A
  + RebalancerFactory: 0x8e402538fCb0c284010fffF325831B494EE891D1
  + Rebalancer for BPK and UET: 0xF73535a551006fF45aE1842f519fbCed51a00886

# To run rebalance process:
  + Create new config record in database for rebalancer_address => record id is RECORD_ID
  [![9N14G.png](https://i.im.ge/2021/08/11/9NOYL.png)](https://im.ge/i/9NOYL)
  [![9N14G.png](https://i.im.ge/2021/08/11/9N14G.png)](https://im.ge/i/9N14G)
  + run `yarn console:dev rebalance RECORD_ID` (or if you use docker, run `make rebalance RECORD_ID`) with RECORD_ID is id of above record (and don't stop it)
  [![9NSsx.png](https://i.im.ge/2021/08/11/9NSsx.png)](https://im.ge/i/9NSsx)
  + bonus: rebalance strategy will rebalance if price out of range or price move too large, before rebalance, it reset the rebalancer contract's stage to HOLDING in 2 mins and then rebalance. You can deposit and withdraw in HOLDING stage.
