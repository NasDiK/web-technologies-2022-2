CREATE TABLE `products` (
    `id` int(32) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` text NOT NULL,
    `price` decimal(10, 2) NOT NULL,
    `image` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `reviews` (
    `id` int(32) NOT NULL AUTO_INCREMENT,
    `product_id` int(32) NOT NULL,
    `author` varchar(255) NOT NULL,
    `text` text NOT NULL,
    PRIMARY KEY (`id`),
    KEY `product_id` (`product_id`),
    CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO
    `products` (`name`, `description`, `price`, `image`)
VALUES
    (
        'Первый',
        'Описание первого',
        322,
        'product1.jpeg'
    ),
    (
        'Второй',
        'Типа овощ',
        77.7,
        'product2.jpg'
    ),
    (
        'Чевапчичи',
        'Сосиски на косте жарить которые',
        25.99,
        'product3.jpg'
    );

INSERT INTO
    `reviews` (`product_id`, `author`, `text`)
VALUES
    (1, 'Семён Семёнович Горбунков', 'Не брал, но отвечаю не очень'),
    (1, 'Геша Козодоев', 'Свои функции выполняет'),
    (2, 'Лёлик', 'Купил в СПЛИТ, до сих пор ипотеку выплачиваю'),
    (3, 'Варвара Сергеевна Плющ', 'Топ за свои деньги' ),
    (3, 'Надежда Ивановна Горбункова', 'Не понял куда ваши 50 тыщ потратил...'),
    (3, 'Анна Сергеевна', 'вещь как вещь...');