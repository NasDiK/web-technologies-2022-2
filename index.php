<?php
function task1($a, $b) {
  if ($a >= 0 && $b >= 0) {
    return $a - $b;
  } elseif ($a < 0 && $b < 0) {
    return $a * $b;
  } elseif (($a < 0 && $b >= 0) || ($a >= 0 && $b < 0)) {
    return $a + $b;
  }
}

function task2($a) {
  switch ($a) {
    case 0:
      echo '0 ';
      $a++;
    case 1:
      echo '1 ';
      $a++;
    case 2:
      echo '2 ';
      $a++;
    case 3:
      echo '3 ';
      $a++;
    case 4:
      echo '4 ';
      $a++;
    case 5:
      echo '5 ';
      $a++;
    case 6:
      echo '6 ';
      $a++;
    case 7:
      echo '7 ';
      $a++;
    case 8:
      echo '8 ';
      $a++;
    case 9:
      echo '9 ';
      $a++;
    case 10:
      echo '10 ';
      $a++;
    case 11:
      echo '11 ';
      $a++;
    case 12:
      echo '12 ';
      $a++;
    case 13:
      echo '13 ';
      $a++;
    case 14:
      echo '14 ';
      $a++;
    case 15:
      echo '15';
      $a++;
    default:
      return;
  }
}

//1
$a = rand(0, 100);
$b = rand(0, 100);

echo task1($a, $b);

//2
echo '<hr/>';
$a = rand(0, 15);

task2($a);

//3
$a = 5;
$b = 10;
echo '<hr/>';
function addition($a, $b) {
    return $a + $b;
}

function subtraction($a, $b) {
    return $a - $b;
}

function multiplication($a, $b) {
    return $a * $b;
}

function division($a, $b) {
  return $a / $b;
}

echo 'Сложение ' . addition($a, $b) . '<br/>';
echo 'Вычитание ' . subtraction($a, $b) . '<br/>';
echo 'Умножение ' . multiplication($a, $b) . '<br/>';
echo 'Деление ' . division($a, $b) . '<br/>';

//4
echo '<hr/>';
function mathOperation($arg1, $arg2, $operation)
{
  switch ($operation) {
    case 'addition':
      return addition($arg1, $arg2);
    case 'subtraction':
      return subtraction($arg1, $arg2);
    case 'multiplication':
      return multiplication($arg1, $arg2);
    case 'division':
      return division($arg1, $arg2);
  }
}

echo mathOperation($a, $b, 'addition');
//6
echo '<hr/>';
function power($val, $pow) {
  if ($pow < 0) {
    return 1;
  }

  if ($pow == 1) {
      return $val;
  }
 
  return  $val * power($val, $pow - 1);
}

echo power(2, 5);
echo '<hr/>';

//5 ниже!!!
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lesson17</title>
</head>
<body>
<p><?php echo date('Y'); ?></p>
<?php require('php_module.php') ?>
<?php
$year = date('Y');
$content = file_get_contents('index.html');
$content = str_replace('{{ year }}', $year, $content);
echo $content; ?>
</body>
</html>