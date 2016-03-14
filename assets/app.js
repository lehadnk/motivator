var earned = 0;
var passed = 0;
salaryRate = 1;

function updateOdometer() {
    earned += salaryRate / 3600;
    passed += 1;
    $('#odometer').html(earned);
}

function runOdometer() {
    var rate = $('#salary-rate').val();
    salaryRate = rate;
    $('#salary-form').fadeOut(1250, function() {
        $('#odometer-window').fadeIn(1250);
        setInterval(updateOdometer, 1000);
        setInterval(displayRandomMessage, 12500);
        displayRandomMessage();
    });
}

function getRandomMessage() {
    if (passed < 10) {
        return 'А теперь продолжаем хуярить...';
    }
    if (passed > 20 * 3600) {
        return 'Пиздуй-ка ты спать';
    }
    if (earned > 8000) {
        return 'Дневную норму сделал!';
    }
    if (earned > 400 && earned < 450) {
        return 'Ну, по крайней мере на еду заработал';
    }
    if (earned > 55 && earned < 70) {
        return 'Хватит на чизбургер!';
    }
    if (earned > 1300 && earned < 1400) {
        return 'Кстати в "Перекрестке" 0.5 Джека по акции - 1300 рублей.';
    }
    
    var date = new Date();
    var day = date.getDate();
    var hoursLeft = 9 * (31 - day);
    
    var rentPrice = Math.round(100000 / salaryRate);
    var toiPhone = Math.round(66000 - earned);
    
    var dollarLow = Math.random(1) / 10;
    
    var messages = [
        'Работа сама себя не сделает :(',
        'Всего '+hoursLeft+' часов в этом месяце и можно будет поспать',
        'Аренда квартиры в Бруклине обойдется примерно в '+rentPrice+' твоих трудочасов',
        'Еще '+toiPhone+'₽ и сможешь купить себе новый iPhone!',
        'Доллар упал на '+(Math.random(0.01) / 10).toFixed(2)+'₽!',
        'Курс доллара уже '+(69+Math.random(90) * 10).toFixed(2)+'₽. Но ведь было бы гораздо хуже если было бы 100?',
        'Еженедельная уборка обходится тебе примерно в '+(salaryRate * 2)+'₽ простоя. Один обед - в '+(salaryRate)+'₽.',
        'Если спать на 2 часа меньше то это выйдет '+(salaryRate * 2 * 30)+'₽ в месяц. Еще можно было бы посчитать выходные, но у тебя их нет.',
        'Не забудь покормить кота. Если кота нет то не забудь его завести.',
        'Вдоль, не поперек. И выпей таблетку аспирина.',
        "The Final Countdown is now ringing in your head. We're living together. But still it's farewell.",
    ];
    
    var message = messages[Math.floor(Math.random() * messages.length)];
    return message;
}

function displayRandomMessage() {
    var message = getRandomMessage();
    var element = $('#message');
    if (element.html() !== message) {
        element.fadeOut(500, function() {
            element.html(message);
            element.fadeIn(500);
        });
    }
}