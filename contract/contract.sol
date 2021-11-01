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

    // Проверяет, администратор ли пользователь
    modifier onlyAdmin() {
        require(
            users[msg.sender].admin,
            "You're not permitted to do such operation!"
        );
        _;
    }

    // Создать перевод
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

    // Подтвердить перевод (получатель пишет кодовое слово и если оно верно - получает деньги)
    function verifyTransfer(uint256 transferID, bytes32 codewordHash)
        public
        returns (bool success)
    {
        Transfer memory thisTransfer = transfers[transferID];

        // Если перевод завершен или предназначен не отправителю запроса, возвращаем ошибку
        require(
            msg.sender == thisTransfer.to && !thisTransfer.done,
            "You can't verify this transfer!"
        );

        // Проверка кодового слова
        require(codewordHash == thisTransfer.codewordHash, "Wrong codeword!");

        // Адрес получателя
        address payable recipient = payable(msg.sender);

        // Указываем, что перевод успешно осуществлен и завершен
        transfers[transferID].success = true;
        transfers[transferID].done = true;
        success = true;

        // Переводим деньги получателю
        recipient.transfer(thisTransfer.value);
    }

    // Отменить перевод, если он еще не осуществлен
    function revertTransfer(uint256 transferID) public {
        Transfer memory thisTransfer = transfers[transferID];

        require(
            msg.sender == thisTransfer.from,
            "You can't revert this transfer!"
        );
        require(!thisTransfer.success, "This transfer is already done!");

        address payable sender = payable(msg.sender);
        sender.transfer(thisTransfer.value);

        // Указываем, что перевод завершен (все остальные операции недоступны)
        transfers[transferID].done = true;
    }

    // Получить список переводов за последние daysCount дней
    function getTransfersOnDays(uint256 daysCount)
        public
        view
        returns (Transfer[] memory allTransfersOnPeriod)
    {
        // Начиная с какого тамйштампа брать переводы: текущее время - (количество дней * 24 часа * 60 минут * 60 секунд)
        uint256 fromTimestamp = block.timestamp -
            (daysCount * 24 * 60 * 60 * 60);

        // Отправленные и полученные переводы
        uint256[] memory sentTransfers = users[msg.sender].sentTransfers;
        uint256[] memory recievedTransfers = users[msg.sender]
            .recievedTransfers;

        uint256[][2] memory allTransfers = [sentTransfers, recievedTransfers];

        uint256 lastIndex = 0;

        // Проходимся по всем переводам, ищем те что нужно
        for (uint8 i = 0; i < allTransfers.length; i++) {
            for (uint256 j = 0; j < allTransfers[i].length; j++) {
                uint256 thisTransferID = allTransfers[i][j];
                Transfer memory thisTransfer = transfers[thisTransferID];

                // Если перевод был осуществлен после нужного таймштампа, добавляем его в возвращаемый массив
                if (thisTransfer.timestamp > fromTimestamp) {
                    allTransfersOnPeriod[lastIndex++] = thisTransfer;
                }
            }
        }
    }

    // Получить идентификаторы отправленных переводов
    function getSentTransfers() public view returns (uint256[] memory) {
        return users[msg.sender].sentTransfers;
    }

    // Получить идентификаторы полученных переводов
    function getRecievedTransfers() public view returns (uint256[] memory) {
        return users[msg.sender].recievedTransfers;
    }

    // Получить подробную информацию о переводе по его ID
    function getTransfer(uint256 transferID)
        public
        view
        returns (Transfer memory)
    {
        return transfers[transferID];
    }

    // Добавить категорию
    function addCategory(string memory name)
        public
        onlyAdmin
        returns (uint256 categoryID)
    {
        categoryID = categoryNames.length - 1;
        categories[name] = Category(name);

        categoryNames.push(name);
    }

    // Добавить шаблон
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

    // Получить названия шаблонов
    function getTemplateNames() public view returns (string[] memory) {
        return templateNames;
    }

    // Получить подробную информацию о шаблоне по его имени
    function getTemplate(string memory name)
        public
        view
        returns (Template memory)
    {
        return templates[name];
    }

    // Получить имена категорий
    function getCategoryNames() public view returns (string[] memory) {
        return categoryNames;
    }

    // Получить подробную информацию о категории по её имени
    function getCategory(string memory name)
        public
        view
        returns (Category memory)
    {
        return categories[name];
    }

    // Получить массив шаблонов в категории
    function getTemplatesOfCategory(uint256 categoryID)
        public
        view
        returns (string[] memory templatesOfCategory)
    {
        uint256 lastIndex = 0;
        for (uint256 i = 0; i < templateNames.length; i++) {
            Template memory thisTemplate = templates[templateNames[i]];

            if (thisTemplate.categoryID == categoryID) {
                templatesOfCategory[lastIndex++] = categories[
                    categoryNames[categoryID]
                ].name;
            }
        }
    }
}
