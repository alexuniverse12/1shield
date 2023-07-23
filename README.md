[ETH Global 2023]

# 1shield
Private interactions with DEX aggregator such 1Inch utilizing Railgun for privacy preservation. Intended to be used by a browser extension which allows for a user to connect to a dApp with it's existing UI, but calling the contract function calls through the Railgun Relayer so that their interactions are private. For the Proof of Concept we will be utilizing Aave on Polygon. Beyond this Proof of Concept there is a wide range of possibilities to integrating more popular DeFi dApps on a variety of chains.

## Overview
https://traveling-spaghetti-70f.notion.site/1shield-b7c3e0729f6c4989979ac0a714decd0d


## Railgun Integration
Railgun allows for users to transact between accounts privately, as well as with smart contracts. By combining this with the browser extension, a seamless UX is available for users who can utilize the UI they are used to while still retaining their privacy. An example flow of how this could work with 1Inch when taking out a loan:

## Deployment
Deployment configs and artifacts for each chain you can find here: https://github.com/Railgun-Community/deployments/tree/master