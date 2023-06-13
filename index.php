<html>
<head>
    <link rel="stylesheet" href="./assets/style.css" />
</head>
<body>
    <?php
    require_once('./db/config.php');

    function generateProductCardHTML($product) {
        return "
            <div class='product'>
                <img width='200' height='200' src='images/{$product['image']}' alt='{$product['name']}' />
                <h2>{$product['name']}</h2>
                <p>{$product['description']}</p>
                <p>Цена: {$product['price']} ₽</p>
                <a href='?id={$product['id']}'>Показать ещё...</a>
            </div>";
    }
    
    function generateCatalogHTML($products) {
        $html = "<h1>Каталог</h1>";
        foreach ($products as $product) {
            $html .= generateProductCardHTML($product);
        }

        return $html;
    }

    function displayProduct($product) {
        echo "<h1>{$product['name']}</h1>";
        echo "<img width='300' height='300' src='images/{$product['image']}' alt='{$product['name']}' />";
        echo "<p>{$product['description']}</p>";
        echo "<p>Цена: {$product['price']} ₽</p>";
    }

    try {
        $pdo = new PDO($dsn, $user, $password, $options);
    } catch (PDOException $e) {
        echo "Не могу подключиться к БД: " . $e->getMessage();
    }

    if (!isset($_GET['id'])) {
        $stmt = $pdo->prepare("SELECT * FROM products");
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo generateCatalogHTML($products);
    }

    // Отправка отзыва
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        try {
            $query = $pdo->prepare('INSERT INTO reviews (product_id, author, text) VALUES (:product_id, :author, :text)');
            $query->bindParam(':product_id', $_POST['product_id'], PDO::PARAM_INT);
            $query->bindParam(':author', $_POST['author'], PDO::PARAM_STR);
            $query->bindParam(':text', $_POST['text'], PDO::PARAM_STR);

            $query->execute();
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

    //2. Отрисовка страницы продукта
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $stmt = $pdo->prepare("SELECT * FROM products WHERE id=:id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $product = $stmt->fetch(PDO::FETCH_ASSOC);

        displayProduct($product);

        $stmt = $pdo->prepare("SELECT * FROM reviews WHERE product_id=:id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo "<h2>Отзывы</h2>";

        //2.1 Отзывы
        if (empty($reviews)) {
            echo "<p>Ещё нет отзывов.</p>";
        } else {
            array_map(function($review){
                echo "<div class='review'>";
                echo "<p>{$review['text']}</p>";
                echo "<p>Автор: {$review['author']}</p>";
                echo "</div>";
            }, $reviews);
        }

        //2.2 Блок отзывов
        echo "<h2>Оставить отзыв</h2>
            <form method='POST' action='?id={$_GET['id']}'>
                <input type='hidden' name='product_id' value='{$_GET['id']}' />
                <label>Имя:</label><br />
                <input type='text' name='author' /><br />
                <label>Оставить комментарий:</label><br />
                <textarea name='text'></textarea><br />
                <input type='submit' value='Отправить' />
            </form>";
    }
    ?>
</body>

</html>