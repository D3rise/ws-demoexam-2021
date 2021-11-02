const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"addCategory","outputs":[{"internalType":"uint256","name":"categoryID","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"categoryID","type":"uint256"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"addTemplate","outputs":[{"internalType":"uint256","name":"templateID","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"getCategory","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"}],"internalType":"struct Ledger.Category","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCategoryNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRecievedTransfers","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSentTransfers","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"getTemplate","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"categoryID","type":"uint256"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"internalType":"struct Ledger.Template","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTemplateNames","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"categoryID","type":"uint256"}],"name":"getTemplatesOfCategory","outputs":[{"internalType":"string[]","name":"templatesOfCategory","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"transferID","type":"uint256"}],"name":"getTransfer","outputs":[{"components":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"address payable","name":"from","type":"address"},{"internalType":"bytes32","name":"codewordHash","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bool","name":"done","type":"bool"}],"internalType":"struct Ledger.Transfer","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"daysCount","type":"uint256"}],"name":"getTransfersOnDays","outputs":[{"components":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"address payable","name":"from","type":"address"},{"internalType":"bytes32","name":"codewordHash","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bool","name":"done","type":"bool"}],"internalType":"struct Ledger.Transfer[]","name":"allTransfersOnPeriod","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserUpgradePoll","outputs":[{"components":[{"internalType":"address payable","name":"user","type":"address"},{"internalType":"address payable[]","name":"adminsApproved","type":"address[]"}],"internalType":"struct Ledger.UserUpgradePoll","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserUpgradePolls","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"transferID","type":"uint256"}],"name":"revertTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"bytes32","name":"codewordHash","type":"bytes32"},{"internalType":"string","name":"description","type":"string"}],"name":"transfer","outputs":[{"internalType":"uint256","name":"transferID","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"transferID","type":"uint256"},{"internalType":"bytes32","name":"codewordHash","type":"bytes32"}],"name":"verifyTransfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"user","type":"address"}],"name":"voteForUpgradingUser","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const Bytecode = "60806040523480156200001157600080fd5b5060606000604051602001620000279062000659565b60405160208183030381529060405280519060200120905060405180608001604052808281526020016000151581526020018381526020018381525060008073d3d512f5d54cab705962b8f5b18887fea0cedc0973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055506040820151816002019080519060200190620000fd9291906200058d565b5060608201518160030190805190602001906200011c9291906200058d565b5090505060405180608001604052808281526020016000151581526020018381526020018381525060008073ff164757cdaeb859ea01b793eb5eea1e30b80c0673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055506040820151816002019080519060200190620001de9291906200058d565b506060820151816003019080519060200190620001fd9291906200058d565b5090505060405180608001604052808281526020016000151581526020018381526020018381525060008073bc3e4436595f40c7ec699d79cb7b5ef26fec68fa73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055506040820151816002019080519060200190620002bf9291906200058d565b506060820151816003019080519060200190620002de9291906200058d565b5090505060405180608001604052808281526020016000151581526020018381526020018381525060008073c46a163cb71a6e0ab221fbe68ecfb11b3b79b8f573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055506040820151816002019080519060200190620003a09291906200058d565b506060820151816003019080519060200190620003bf9291906200058d565b509050506040518060800160405280828152602001600115158152602001838152602001838152506000807356d8c3c6e4815d10daa12466b1c8d77c5ddaa2b673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055506040820151816002019080519060200190620004819291906200058d565b506060820151816003019080519060200190620004a09291906200058d565b5090505060405180608001604052808281526020016001151581526020018381526020018381525060008073afb6cee6479737ea310c24fbc00e0d71c8becf8d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff0219169083151502179055506040820151816002019080519060200190620005629291906200058d565b506060820151816003019080519060200190620005819291906200058d565b50905050505062000670565b828054828255906000526020600020908101928215620005cc579160200282015b82811115620005cb578251825591602001919060010190620005ae565b5b509050620005db9190620005df565b5090565b5b80821115620005fa576000816000905550600101620005e0565b5090565b600081905092915050565b7f3132330000000000000000000000000000000000000000000000000000000000600082015250565b600062000641600383620005fe565b91506200064e8262000609565b600382019050919050565b6000620006668262000632565b9150819050919050565b61395380620006806000396000f3fe6080604052600436106100fe5760003560e01c80637d67cd6f11610095578063af87a0a911610064578063af87a0a914610376578063b6d4a7de146103b3578063c16fe907146103f0578063e89d5bf71461042d578063f5d5d0b01461046a576100fe565b80637d67cd6f146102a657806394350bff146102e3578063a778a3a11461030e578063a77f7c731461034b576100fe565b80632862e9e6116100d15780632862e9e6146101c45780632e0dcbf71461020157806344bdebda1461023e578063705e7dfd14610269576100fe565b8063060fc6b1146101035780630df26de01461012c578063190377a51461015757806322cf7a0214610194575b600080fd5b34801561010f57600080fd5b5061012a6004803603810190610125919061259d565b610495565b005b34801561013857600080fd5b50610141610785565b60405161014e9190612725565b60405180910390f35b34801561016357600080fd5b5061017e6004803603810190610179919061287c565b61085e565b60405161018b91906128ef565b60405180910390f35b6101ae60048036038101906101a991906129a5565b610928565b6040516101bb9190612a23565b60405180910390f35b3480156101d057600080fd5b506101eb60048036038101906101e6919061259d565b610bed565b6040516101f89190612bf8565b60405180910390f35b34801561020d57600080fd5b506102286004803603810190610223919061287c565b610fff565b6040516102359190612a23565b60405180910390f35b34801561024a57600080fd5b50610253611131565b6040516102609190612cc9565b60405180910390f35b34801561027557600080fd5b50610290600480360381019061028b919061259d565b6111c8565b60405161029d9190612725565b60405180910390f35b3480156102b257600080fd5b506102cd60048036038101906102c8919061287c565b611432565b6040516102da9190612db1565b60405180910390f35b3480156102ef57600080fd5b506102f861155e565b6040516103059190612ea3565b60405180910390f35b34801561031a57600080fd5b5061033560048036038101906103309190612f8d565b6115ec565b6040516103429190612a23565b60405180910390f35b34801561035757600080fd5b50610360611759565b60405161036d9190612cc9565b60405180910390f35b34801561038257600080fd5b5061039d60048036038101906103989190613018565b6117f0565b6040516103aa9190613054565b60405180910390f35b3480156103bf57600080fd5b506103da60048036038101906103d5919061306f565b611c7b565b6040516103e79190613054565b60405180910390f35b3480156103fc57600080fd5b506104176004803603810190610412919061259d565b611fb1565b604051610424919061315f565b60405180910390f35b34801561043957600080fd5b50610454600480360381019061044f91906131ad565b612171565b60405161046191906132c6565b60405180910390f35b34801561047657600080fd5b5061047f6122ae565b60405161048c9190612725565b60405180910390f35b600060036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820154815260200160058201805461059090613317565b80601f01602080910402602001604051908101604052809291908181526020018280546105bc90613317565b80156106095780601f106105de57610100808354040283529160200191610609565b820191906000526020600020905b8154815290600101906020018083116105ec57829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff1615151515815250509050806020015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b3906133a6565b60405180910390fd5b8060c0015115610701576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f890613412565b60405180910390fd5b60003390508073ffffffffffffffffffffffffffffffffffffffff166108fc83608001519081150290604051600060405180830381858888f19350505050158015610750573d6000803e3d6000fd5b5060016003600085815260200190815260200160002060060160016101000a81548160ff021916908315150217905550505050565b60606006805480602002602001604051908101604052809291908181526020016000905b828210156108555783829060005260206000200180546107c890613317565b80601f01602080910402602001604051908101604052809291908181526020018280546107f490613317565b80156108415780601f1061081657610100808354040283529160200191610841565b820191906000526020600020905b81548152906001019060200180831161082457829003601f168201915b5050505050815260200190600101906107a9565b50505050905090565b610866612387565b600482604051610876919061346e565b908152602001604051809103902060405180602001604052908160008201805461089f90613317565b80601f01602080910402602001604051908101604052809291908181526020018280546108cb90613317565b80156109185780601f106108ed57610100808354040283529160200191610918565b820191906000526020600020905b8154815290600101906020018083116108fb57829003601f168201915b5050505050815250509050919050565b600080341161096c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610963906134d1565b60405180910390fd5b6008600081548092919061097f90613520565b91905055905060006040518061010001604052808673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001428152602001348152602001848152602001600015158152602001600015158152509050806003600084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005019080519060200190610ad192919061239a565b5060c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548160ff0219169083151502179055509050506000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018290806001815401808255809150506001900390600052602060002001600090919091909150556000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201829080600181540180825580915050600190039060005260206000200160009091909190915055509392505050565b60606000603c80603c601886610c039190613569565b610c0d9190613569565b610c179190613569565b610c219190613569565b42610c2c91906135c3565b905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201805480602002602001604051908101604052809291908181526020018280548015610cbb57602002820191906000526020600020905b815481526020019060010190808311610ca7575b5050505050905060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301805480602002602001604051908101604052809291908181526020018280548015610d4f57602002820191906000526020600020905b815481526020019060010190808311610d3b575b50505050509050600060405180604001604052808481526020018381525090506000805b60028160ff161015610ff45760005b838260ff1660028110610d9857610d976135f7565b5b602002015151811015610fe0576000848360ff1660028110610dbd57610dbc6135f7565b5b60200201518281518110610dd457610dd36135f7565b5b60200260200101519050600060036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582018054610ed990613317565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0590613317565b8015610f525780601f10610f2757610100808354040283529160200191610f52565b820191906000526020600020905b815481529060010190602001808311610f3557829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff16151515158152505090508881606001511115610fcb57808a8680610fac90613520565b975081518110610fbf57610fbe6135f7565b5b60200260200101819052505b50508080610fd890613520565b915050610d82565b508080610fec90613633565b915050610d73565b505050505050919050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1661108f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611086906136cf565b60405180910390fd5b60016006805490506110a191906135c3565b90506040518060200160405280838152506004836040516110c2919061346e565b908152602001604051809103902060008201518160000190805190602001906110ec92919061239a565b5090505060068290806001815401808255809150506001900390600052602060002001600090919091909150908051906020019061112b92919061239a565b50919050565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018054806020026020016040519081016040528092919081815260200182805480156111be57602002820191906000526020600020905b8154815260200190600101908083116111aa575b5050505050905090565b60606000805b60078054905081101561142b5760006005600783815481106111f3576111f26135f7565b5b9060005260206000200160405161120a9190613783565b908152602001604051809103902060405180606001604052908160008201805461123390613317565b80601f016020809104026020016040519081016040528092919081815260200182805461125f90613317565b80156112ac5780601f10611281576101008083540402835291602001916112ac565b820191906000526020600020905b81548152906001019060200180831161128f57829003601f168201915b50505050508152602001600182015481526020016002820180548060200260200160405190810160405280929190818152602001828054801561130e57602002820191906000526020600020905b8154815260200190600101908083116112fa575b505050505081525050905084816020015114156114175760046006868154811061133b5761133a6135f7565b5b906000526020600020016040516113529190613783565b9081526020016040518091039020600001805461136e90613317565b80601f016020809104026020016040519081016040528092919081815260200182805461139a90613317565b80156113e75780601f106113bc576101008083540402835291602001916113e7565b820191906000526020600020905b8154815290600101906020018083116113ca57829003601f168201915b50505050508484806113f890613520565b95508151811061140b5761140a6135f7565b5b60200260200101819052505b50808061142390613520565b9150506111ce565b5050919050565b61143a612420565b60058260405161144a919061346e565b908152602001604051809103902060405180606001604052908160008201805461147390613317565b80601f016020809104026020016040519081016040528092919081815260200182805461149f90613317565b80156114ec5780601f106114c1576101008083540402835291602001916114ec565b820191906000526020600020905b8154815290600101906020018083116114cf57829003601f168201915b50505050508152602001600182015481526020016002820180548060200260200160405190810160405280929190818152602001828054801561154e57602002820191906000526020600020905b81548152602001906001019080831161153a575b5050505050815250509050919050565b606060028054806020026020016040519081016040528092919081815260200182805480156115e257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611598575b5050505050905090565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1661167c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611673906136cf565b60405180910390fd5b600160078054905061168e91906135c3565b9050600060405180606001604052808681526020018581526020018481525090506007859080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906116ea92919061239a565b50806005866040516116fc919061346e565b9081526020016040518091039020600082015181600001908051906020019061172692919061239a565b5060208201518160010155604082015181600201908051906020019061174d929190612441565b50905050509392505050565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018054806020026020016040519081016040528092919081815260200182805480156117e657602002820191906000526020600020905b8154815260200190600101908083116117d2575b5050505050905090565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16611880576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611877906136cf565b60405180910390fd5b6000630f3b77e3905060005b600280549050816fffffffffffffffffffffffffffffffff16101561195c578373ffffffffffffffffffffffffffffffffffffffff166002826fffffffffffffffffffffffffffffffff16815481106118e8576118e76135f7565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561194957806fffffffffffffffffffffffffffffffff16915061195c565b8080611954906137b6565b91505061188c565b50630f3b77e38114156119cd576002839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600080600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020018280548015611a9257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611a48575b5050505050905060005b8151811015611b0f573373ffffffffffffffffffffffffffffffffffffffff16828281518110611acf57611ace6135f7565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415611afc5760019250611b0f565b8080611b0790613520565b915050611a9c565b5081611bbd57600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600193505b60095460018251611bce91906137ef565b10611c6f5760016000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160006101000a81548160ff02191690831515021790555060028381548110611c4157611c406135f7565b5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555b60009350505050919050565b60008060036000858152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820154815260200160048201548152602001600582018054611d7790613317565b80601f0160208091040260200160405190810160405280929190818152602001828054611da390613317565b8015611df05780601f10611dc557610100808354040283529160200191611df0565b820191906000526020600020905b815481529060010190602001808311611dd357829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff1615151515815250509050806000015173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148015611e7257508060e00151155b611eb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea890613891565b60405180910390fd5b80604001518314611ef7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eee906138fd565b60405180910390fd5b600033905060016003600087815260200190815260200160002060060160006101000a81548160ff02191690831515021790555060016003600087815260200190815260200160002060060160016101000a81548160ff021916908315150217905550600192508073ffffffffffffffffffffffffffffffffffffffff166108fc83608001519081150290604051600060405180830381858888f19350505050158015611fa8573d6000803e3d6000fd5b50505092915050565b611fb961248e565b60036000838152602001908152602001600020604051806101000160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201548152602001600482015481526020016005820180546120b290613317565b80601f01602080910402602001604051908101604052809291908181526020018280546120de90613317565b801561212b5780601f106121005761010080835404028352916020019161212b565b820191906000526020600020905b81548152906001019060200180831161210e57829003601f168201915b505050505081526020016006820160009054906101000a900460ff161515151581526020016006820160019054906101000a900460ff1615151515815250509050919050565b612179612506565b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180548060200260200160405190810160405280929190818152602001828054801561229e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612254575b5050505050815250509050919050565b60606007805480602002602001604051908101604052809291908181526020016000905b8282101561237e5783829060005260206000200180546122f190613317565b80601f016020809104026020016040519081016040528092919081815260200182805461231d90613317565b801561236a5780601f1061233f5761010080835404028352916020019161236a565b820191906000526020600020905b81548152906001019060200180831161234d57829003601f168201915b5050505050815260200190600101906122d2565b50505050905090565b6040518060200160405280606081525090565b8280546123a690613317565b90600052602060002090601f0160209004810192826123c8576000855561240f565b82601f106123e157805160ff191683800117855561240f565b8280016001018555821561240f579182015b8281111561240e5782518255916020019190600101906123f3565b5b50905061241c9190612536565b5090565b60405180606001604052806060815260200160008152602001606081525090565b82805482825590600052602060002090810192821561247d579160200282015b8281111561247c578251825591602001919060010190612461565b5b50905061248a9190612536565b5090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600080191681526020016000815260200160008152602001606081526020016000151581526020016000151581525090565b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b5b8082111561254f576000816000905550600101612537565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61257a81612567565b811461258557600080fd5b50565b60008135905061259781612571565b92915050565b6000602082840312156125b3576125b261255d565b5b60006125c184828501612588565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612630578082015181840152602081019050612615565b8381111561263f576000848401525b50505050565b6000601f19601f8301169050919050565b6000612661826125f6565b61266b8185612601565b935061267b818560208601612612565b61268481612645565b840191505092915050565b600061269b8383612656565b905092915050565b6000602082019050919050565b60006126bb826125ca565b6126c581856125d5565b9350836020820285016126d7856125e6565b8060005b8581101561271357848403895281516126f4858261268f565b94506126ff836126a3565b925060208a019950506001810190506126db565b50829750879550505050505092915050565b6000602082019050818103600083015261273f81846126b0565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61278982612645565b810181811067ffffffffffffffff821117156127a8576127a7612751565b5b80604052505050565b60006127bb612553565b90506127c78282612780565b919050565b600067ffffffffffffffff8211156127e7576127e6612751565b5b6127f082612645565b9050602081019050919050565b82818337600083830152505050565b600061281f61281a846127cc565b6127b1565b90508281526020810184848401111561283b5761283a61274c565b5b6128468482856127fd565b509392505050565b600082601f83011261286357612862612747565b5b813561287384826020860161280c565b91505092915050565b6000602082840312156128925761289161255d565b5b600082013567ffffffffffffffff8111156128b0576128af612562565b5b6128bc8482850161284e565b91505092915050565b600060208301600083015184820360008601526128e28282612656565b9150508091505092915050565b6000602082019050818103600083015261290981846128c5565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061293c82612911565b9050919050565b61294c81612931565b811461295757600080fd5b50565b60008135905061296981612943565b92915050565b6000819050919050565b6129828161296f565b811461298d57600080fd5b50565b60008135905061299f81612979565b92915050565b6000806000606084860312156129be576129bd61255d565b5b60006129cc8682870161295a565b93505060206129dd86828701612990565b925050604084013567ffffffffffffffff8111156129fe576129fd612562565b5b612a0a8682870161284e565b9150509250925092565b612a1d81612567565b82525050565b6000602082019050612a386000830184612a14565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b612a7381612931565b82525050565b612a828161296f565b82525050565b612a9181612567565b82525050565b60008115159050919050565b612aac81612a97565b82525050565b600061010083016000830151612acb6000860182612a6a565b506020830151612ade6020860182612a6a565b506040830151612af16040860182612a79565b506060830151612b046060860182612a88565b506080830151612b176080860182612a88565b5060a083015184820360a0860152612b2f8282612656565b91505060c0830151612b4460c0860182612aa3565b5060e0830151612b5760e0860182612aa3565b508091505092915050565b6000612b6e8383612ab2565b905092915050565b6000602082019050919050565b6000612b8e82612a3e565b612b988185612a49565b935083602082028501612baa85612a5a565b8060005b85811015612be65784840389528151612bc78582612b62565b9450612bd283612b76565b925060208a01995050600181019050612bae565b50829750879550505050505092915050565b60006020820190508181036000830152612c128184612b83565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612c528383612a88565b60208301905092915050565b6000602082019050919050565b6000612c7682612c1a565b612c808185612c25565b9350612c8b83612c36565b8060005b83811015612cbc578151612ca38882612c46565b9750612cae83612c5e565b925050600181019050612c8f565b5085935050505092915050565b60006020820190508181036000830152612ce38184612c6b565b905092915050565b600082825260208201905092915050565b6000612d0782612c1a565b612d118185612ceb565b9350612d1c83612c36565b8060005b83811015612d4d578151612d348882612c46565b9750612d3f83612c5e565b925050600181019050612d20565b5085935050505092915050565b60006060830160008301518482036000860152612d778282612656565b9150506020830151612d8c6020860182612a88565b5060408301518482036040860152612da48282612cfc565b9150508091505092915050565b60006020820190508181036000830152612dcb8184612d5a565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612e0a82612911565b9050919050565b612e1a81612dff565b82525050565b6000612e2c8383612e11565b60208301905092915050565b6000602082019050919050565b6000612e5082612dd3565b612e5a8185612dde565b9350612e6583612def565b8060005b83811015612e96578151612e7d8882612e20565b9750612e8883612e38565b925050600181019050612e69565b5085935050505092915050565b60006020820190508181036000830152612ebd8184612e45565b905092915050565b600067ffffffffffffffff821115612ee057612edf612751565b5b602082029050602081019050919050565b600080fd5b6000612f09612f0484612ec5565b6127b1565b90508083825260208201905060208402830185811115612f2c57612f2b612ef1565b5b835b81811015612f555780612f418882612588565b845260208401935050602081019050612f2e565b5050509392505050565b600082601f830112612f7457612f73612747565b5b8135612f84848260208601612ef6565b91505092915050565b600080600060608486031215612fa657612fa561255d565b5b600084013567ffffffffffffffff811115612fc457612fc3612562565b5b612fd08682870161284e565b9350506020612fe186828701612588565b925050604084013567ffffffffffffffff81111561300257613001612562565b5b61300e86828701612f5f565b9150509250925092565b60006020828403121561302e5761302d61255d565b5b600061303c8482850161295a565b91505092915050565b61304e81612a97565b82525050565b60006020820190506130696000830184613045565b92915050565b600080604083850312156130865761308561255d565b5b600061309485828601612588565b92505060206130a585828601612990565b9150509250929050565b6000610100830160008301516130c86000860182612a6a565b5060208301516130db6020860182612a6a565b5060408301516130ee6040860182612a79565b5060608301516131016060860182612a88565b5060808301516131146080860182612a88565b5060a083015184820360a086015261312c8282612656565b91505060c083015161314160c0860182612aa3565b5060e083015161315460e0860182612aa3565b508091505092915050565b6000602082019050818103600083015261317981846130af565b905092915050565b61318a81612dff565b811461319557600080fd5b50565b6000813590506131a781613181565b92915050565b6000602082840312156131c3576131c261255d565b5b60006131d184828501613198565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006132128383612a6a565b60208301905092915050565b6000602082019050919050565b6000613236826131da565b61324081856131e5565b935061324b836131f6565b8060005b8381101561327c5781516132638882613206565b975061326e8361321e565b92505060018101905061324f565b5085935050505092915050565b60006040830160008301516132a16000860182612a6a565b50602083015184820360208601526132b9828261322b565b9150508091505092915050565b600060208201905081810360008301526132e08184613289565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061332f57607f821691505b60208210811415613343576133426132e8565b5b50919050565b600082825260208201905092915050565b7f596f752063616e2774207265766572742074686973207472616e736665722100600082015250565b6000613390601f83613349565b915061339b8261335a565b602082019050919050565b600060208201905081810360008301526133bf81613383565b9050919050565b7f54686973207472616e7366657220697320616c726561647920646f6e65210000600082015250565b60006133fc601e83613349565b9150613407826133c6565b602082019050919050565b6000602082019050818103600083015261342b816133ef565b9050919050565b600081905092915050565b6000613448826125f6565b6134528185613432565b9350613462818560208601612612565b80840191505092915050565b600061347a828461343d565b915081905092915050565b7f596f752063616e27742073656e64207a65726f20636f696e7321000000000000600082015250565b60006134bb601a83613349565b91506134c682613485565b602082019050919050565b600060208201905081810360008301526134ea816134ae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061352b82612567565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561355e5761355d6134f1565b5b600182019050919050565b600061357482612567565b915061357f83612567565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156135b8576135b76134f1565b5b828202905092915050565b60006135ce82612567565b91506135d983612567565b9250828210156135ec576135eb6134f1565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060ff82169050919050565b600061363e82613626565b915060ff821415613652576136516134f1565b5b600182019050919050565b7f596f75277265206e6f74207065726d697474656420746f20646f20737563682060008201527f6f7065726174696f6e2100000000000000000000000000000000000000000000602082015250565b60006136b9602a83613349565b91506136c48261365d565b604082019050919050565b600060208201905081810360008301526136e8816136ac565b9050919050565b60008190508160005260206000209050919050565b6000815461371181613317565b61371b8186613432565b9450600182166000811461373657600181146137475761377a565b60ff1983168652818601935061377a565b613750856136ef565b60005b8381101561377257815481890152600182019150602081019050613753565b838801955050505b50505092915050565b600061378f8284613704565b915081905092915050565b60006fffffffffffffffffffffffffffffffff82169050919050565b60006137c18261379a565b91506fffffffffffffffffffffffffffffffff8214156137e4576137e36134f1565b5b600182019050919050565b60006137fa82612567565b915061380583612567565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561383a576138396134f1565b5b828201905092915050565b7f596f752063616e2774207665726966792074686973207472616e736665722100600082015250565b600061387b601f83613349565b915061388682613845565b602082019050919050565b600060208201905081810360008301526138aa8161386e565b9050919050565b7f57726f6e6720636f6465776f7264210000000000000000000000000000000000600082015250565b60006138e7600f83613349565b91506138f2826138b1565b602082019050919050565b60006020820190508181036000830152613916816138da565b905091905056fea26469706673582212206284fcc4d2fc66291f93b69cae037e6bec33a12825c21afac684007584830d4f64736f6c63430008090033"

var contract = web3.eth.contract(ABI);

personal.unlockAccount(eth.accounts[0], "123")
var ledger = contract.new({from: eth.accounts[0], data: Bytecode, gas: 8000000});