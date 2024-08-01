# Rock-Paper-Scissor on Aptos 🔮

### Install Aptos CLI on Linux
```curl -fsSL "https://aptos.dev/scripts/install_cli.py" | python3```

### Verify Installation
```aptos help```

### Initialisation of Project

+ ```aptos init```
+ when prompted, type testnet and press <kbd>Enter</kbd>
+ enter your private key from Aptos Wallet (Petra)
+ create a move package ```aptos move init --name rock_paper_scissor```
+ inside <kbd>Move.toml</kbd>, add your public wallet address in addresses field
### Compile Move Script
+ ```aptos move compile```

### Deploy the Code
+ ```aptos move publish```

### Run the frontend
+ ```cd interface``` and ```npm install```
+ create a .env file inside interface/
+ write two parameters in .env: 
```
REACT_APP_MODULE_ADDRESS = "<your-public-wallet-address-of-input-private-key>"
REACT_APP_MODULE_NAME="rock-paper-scissor"
```
