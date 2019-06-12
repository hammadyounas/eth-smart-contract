// pragma solidity >=0.4.22 <0.6.0;


// contract Inbox {
//     string public message;
//      constructor(string memory initalMessage) public {
//         message = initalMessage;
//     }
//     function setMessage(string memory newMessage) public {
//         message = newMessage;
//     }
//     function getMessage() public view returns (string memory){
//         return message;
//     }
// }

pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string initalMessage) public {
        message = initalMessage;
    }
    function setMessage(string newMessage) public {
        message = newMessage;   
    }
    function getMessage() public view returns (string){
        return message;
    }
}

