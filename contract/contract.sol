//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Ledger {
    // Структура перевода
    struct Transfer {
        address payable to; // Кому осуществляем перевод
        address payable from; // От кого осуществляется перевод
        bytes32 codewordHash; // Хеш кодового слова, задается на клиенте по алгоритму keccak256
        uint256 timestamp; // Дата создания перевода
        uint256 value; // Количество веев в переводе
        string description; // Описание перевода
        bool success; // Были ли средства переведены получателю
        bool done; // Был ли перевод завершен (значит, с переводом больше сделать ничего нельзя)
    }

    // Структура категории
    struct Category {
        string name; // Имя категории
    }

    // Структура шаблона
    struct Template {
        string name; // Название шаблона
        uint256 categoryID; // Идентификатор категории
        uint256[] values; // Возможные значения для перевода
    }

    // Структура пользователя
    struct User {
        bytes32 pwHash; // Хеш пароля, задается на клиенте
        bool admin; // Администратор ли этот пользователь
        uint256[] sentTransfers; // Отправленные переводы
        uint256[] recievedTransfers; // Полученные переводы
    }

    mapping(address => User) users; // пользователи по адресам в блокчейне
    mapping(uint256 => Transfer) transfers; // переводы

    mapping(string => Category) categories; // категории по названиям
    mapping(string => Template) templates; // шаблоны по названиям

    string[] categoryNames; // имена категорий, индексы соответсвуют ID
    string[] templateNames; // имена шаблонов, индексы соответсвуют ID

    uint256 numTransfers; // общее количество переводов

    modifier onlyAdmin() {
        require(
            users[msg.sender].admin,
            "You're not permitted to do such operation!"
        );
        _;
    }

    // Перевод
    function transfer(
        address payable to,
        bytes32 codewordHash,
        string memory description
    ) public payable returns (uint256 transferID) {
        require(msg.value > 0, "You can't send zero coins!");

        transferID = numTransfers++;

        Transfer memory newTransfer = Transfer(
            to,
            payable(msg.sender),
            codewordHash,
            block.timestamp,
            msg.value,
            description,
            false,
            false
        );
        transfers[transferID] = newTransfer;

        users[to].recievedTransfers.push(transferID);
        users[msg.sender].sentTransfers.push(transferID);
    }

    function verifyTransfer(uint256 transferID, bytes32 codewordHash)
        public
        returns (bool success)
    {
        Transfer memory thisTransfer = transfers[transferID];
        require(
            msg.sender == thisTransfer.to,
            "You can't verify this transfer!"
        );

        require(thisTransfer.value > 0, "Transfer does not exists!");
        require(codewordHash == thisTransfer.codewordHash, "Wrong codeword!");

        address payable recipient = payable(msg.sender);

        transfers[transferID].success = true;
        transfers[transferID].done = true;
        recipient.transfer(thisTransfer.value);
        success = true;
    }

    function revertTransfer(uint256 transferID) public {
        Transfer memory thisTransfer = transfers[transferID];

        require(
            msg.sender == thisTransfer.from,
            "You can't revert this transfer!"
        );
        require(!thisTransfer.success, "This transfer is already done!");

        address payable recipient = payable(msg.sender);
        recipient.transfer(thisTransfer.value);
        transfers[transferID].done = true;
    }

    function getSentTransfers() public view returns (uint256[] memory) {
        return users[msg.sender].sentTransfers;
    }

    function getRecievedTransfers() public view returns (uint256[] memory) {
        return users[msg.sender].recievedTransfers;
    }

    function getTransfer(uint256 transferID)
        public
        view
        returns (Transfer memory)
    {
        return transfers[transferID];
    }

    function getTransfersOnDays(uint256 daysCount)
        public
        view
        returns (Transfer[] memory allTransfersOnPeriod)
    {
        uint256 fromTimestamp = block.timestamp -
            (daysCount * 24 * 60 * 60 * 60);

        uint256[] memory sentTransfers = users[msg.sender].sentTransfers;
        uint256[] memory recievedTransfers = users[msg.sender]
            .recievedTransfers;

        uint256 lastIndex = 0;

        for (uint256 i = 0; i < sentTransfers.length; i++) {
            uint256 thisTransferID = sentTransfers[i];
            Transfer memory thisTransfer = transfers[thisTransferID];

            if (thisTransfer.timestamp > fromTimestamp) {
                allTransfersOnPeriod[lastIndex++] = thisTransfer;
            }
        }

        for (uint256 i = 0; i < recievedTransfers.length; i++) {
            uint256 thisTransferID = recievedTransfers[i];
            Transfer memory thisTransfer = transfers[thisTransferID];

            if (thisTransfer.timestamp > fromTimestamp) {
                allTransfersOnPeriod[lastIndex++] = thisTransfer;
            }
        }
    }

    function addCategory(string memory name)
        public
        onlyAdmin
        returns (uint256 categoryID)
    {
        categoryID = categoryNames.length - 1;
        categories[name] = Category(name);

        categoryNames.push(name);
    }

    function addTemplate(
        string memory name,
        uint256 categoryID,
        uint256[] memory values
    ) public onlyAdmin returns (uint256 templateID) {
        templateID = templateNames.length - 1;
        Template memory newTemplate = Template(name, categoryID, values);

        templateNames.push(name);
        templates[name] = newTemplate;
    }

    function getTemplateNames() public view returns (string[] memory) {
        return templateNames;
    }

    function getTemplate(string memory name)
        public
        view
        returns (Template memory)
    {
        return templates[name];
    }

    function getCategoryNames() public view returns (string[] memory) {
        return categoryNames;
    }

    function getCategory(string memory name)
        public
        view
        returns (Category memory)
    {
        return categories[name];
    }
}
