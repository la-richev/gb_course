<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>Document</title>
</head>
<body>
<script type="text/javascript">
    var coefActivity = +prompt('Введите ваш коэффициент активности');
    var age = +prompt('Введите ваш возраст');
    var height = +prompt('Введите ваш рост');
    var weigth = +prompt('Введите ваш вес');
    var resultWoman = (weigth * 9.99 + height * 6.25 - age * 4.92 - 161) * coefActivity;
    var resultMan = (weigth * 9.99 + height * 6.25 - age * 4.92 + 5) * coefActivity;

    alert(
    "DCI = " + resultWoman.toFixed(2) + " для женщин \n" +
    "DCI = " + resultMan.toFixed(2) + ' для мужчин'
    );
</script>
</body>
</html>


<script type="text/javascript">

var i = 0
while (i<3){ //(условия в (), 3 итерации)
    //код цикла
    alert(i);
    i++;
}

</script>