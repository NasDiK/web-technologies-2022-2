<?php
date_default_timezone_set('Asia/Yekaterinburg');
$h1 = 'Первая страничка на PHP';
$title = 'PHP';
$year = date("Y");

function getEnd($digit, $type): string {
  switch ($type){
    case 'hour':
      return getEndForHour($digit);
    case 'minute':
      return getEndForMinute($digit);
  }

  return null;
}

function getEndForHour($digit): string {
  if (in_array($digit, [1, 21]))
    return '';
  else if (in_array($digit, [2,3,4,22,23]))
    return 'a';
  else return 'ов';
}

function getEndForMinute($digit): string {
  if($digit >=10 && $digit <= 20) {
    return '';
  } else {
    $lastDig = $digit % 10;

    if ($lastDig == 1) {
      return 'а';
    } else if ($lastDig >= 2 && $lastDig <= 4) {
      return 'ы';
    } else {
      return '';
    }
  }
}

function getCurrentTime(): string {
  $hour = intval(date('H'));
  $minutes = intval(date('i'));

  $hourText = 'час' . getEnd($hour, 'hour');
  $minutesText = 'минут' . getEnd($minutes, 'minute');

  return $hour . ' ' . $hourText . ' ' . $minutes . ' ' . $minutesText;
}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $title ?></title>
</head>
<body>
<h1><?php echo $h1 ?></h1>
<p><?php echo $year ?></p>
<p>Текущее время: <?php echo getCurrentTime() ?></p>
</body>
</html>