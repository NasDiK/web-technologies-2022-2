<div>
    <?php
    //1
    echo 'Задание 1 <br>';
    $i = 0;
    do {
        if ($i == 0) {
            echo $i . ' - это ноль.';
        } else if ($i % 2 == 0) {
            echo $i . ' - это четное число.';
        } else {
            echo $i . ' - это нечетное число.';
        }
        echo '<br>';
        $i++;
    } while ($i <= 10);

    echo '<hr>';

    //2
    echo 'Задание 2 <br>';
    $regions = [
        'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
        'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
        'Рязанская область' => ['Рязань', 'Шацк', 'Ряжск', 'Тума', 'Касимов',]
    ];

    foreach ($regions as $region => $cities) {
        echo $region . ': <br>';
        echo implode(', ', $cities) . '.';
        echo '<br>';
    }

    echo '<hr>';

    //3
    echo 'Задание 3 <br>';
    $letters = ['a' => 'a', 'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e',
        'ё' => 'yo', 'ж' => 'zh', 'з' => 'z', 'и' => 'i', 'й' => 'j', 'к' => 'k', 'л' => 'l', 'м' => 'm',
        'н' => 'n', 'о' => 'o', 'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f',
        'х' => 'x', 'ц' => 'cz', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shh', 'ъ' => '', 'ы' => 'y', 'ь' => '',
        'э' => 'e', 'ю' => 'yu', 'я' => 'ya'];

    function transliterationToLatin($str, $letters)
    {
        return str_replace(array_keys($letters), array_values($letters), strtolower($str));
    }

    function transliterationToKiril($str, $letters)
    {
        return str_replace(array_values($letters), array_keys($letters), strtolower($str));
    }

    echo transliterationToLatin('C кирилицы на латиницу', $letters);
    echo '<br>';
    echo transliterationToKiril('Naoborot', $letters);
    echo '<hr>';

    //4 вывел сюда т.к 5 задача на движке
    echo 'Задание 4 <br>';
    $menu = [
        [
            'title' => 'Главная',
            'link' => 'index',
        ],
        [
            'title' => 'О нас',
            'link' => 'about',
        ],
        [
            'title' => 'Каталог',
            'link' => 'catalog'
        ],
        [
            'title' => 'Подменю',
            'link' => 'podmenu',
            'children' => [
                [
                    'title' => 'Подменю1',
                    'link' => 'submenu1',
                    'children' => [
                        [
                            'title' => 'Подменю2',
                            'link' => 'submenu2',
                        ],
                        [
                            'title' => 'Подменю2',
                            'link' => 'submenu2',
                        ]
                    ]
                ]
            ]
        ]
    ];

    function printMenu($menu)
    {
        echo '<ul>';
        foreach ($menu as $key => $value) {
            echo '<li>';
            echo "<a href={$value['link']}> {$value['title']} </a>";
            if (array_key_exists('children', $value)) {
                printMenu($value['children']);
            }
            echo '</li>';
        }
        echo '</ul>';
    }

    printMenu($menu);
    echo '<hr>';
    //5 на движке (реализована)
    echo 'Задание 5 <br>';
    echo 'Реализовано на движке';
    echo '<hr>';

    //6
    echo 'Задание 6 <br>';
    $regions = [
        'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
        'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
        'Рязанская область' => ['Рязань', 'Шацк', 'Ряжск', 'Тума', 'Касимов',]
    ];

    foreach ($regions as $region => $cities) {
        echo $region . ': <br>';
        foreach ($cities as $city) {
            if (str_starts_with($city, 'К')) {
                echo $city . ' ';
            }
        }
        echo '<br>';
    }

    echo '<hr>';
    ?>
</div>
