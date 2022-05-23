import abi from "./abi/abi.json" assert {type: "json"};

const connect = new Promise((res, rej) => {
    if (typeof window.ethereum == "undefined") {
        rej("Install Metamask");
    }
    window.ethereum.request({method: "eth_requestAccounts"});
});
 
export default connect;