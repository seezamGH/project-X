# project-X

//=========================

переписал свой код на основе твоей логики.
все вроде работает пока не сделать шаг в сторону))
если добавить в posts.list строку с неизвестным файлом,
то случается беда)
если добавить 2 лишних "/n" то тоже беда)
вобщем как то все не очень весело. твой скрипт так же
реагирует...
Посмотришь?)

Еще вопросы:
ты используешь вот такую страшно-нихера-нечитаемую
проверку на последний эл-т массива

	if (lines[lines.length - 1] == "")
		lines.splice(lines.length - 1, 1);

не проще использовать .pop() ?

	if (lines.pop() == "")
		lines.pop();

или этот метод тоже плохой как .forEach() ?
и ты так и не сказал чем плох .forEach()
а осталные HOF тоже плохие? чем?

Ты писал:
 * Т.к. сообщения получаются асинхронно,
 * то мы не знаем, когда все будут получены.
 * Для этого мы выставляем cnt_total в 
 * общее кол-во и когда cnt_total будет равен
 * cnt - отображаем все сообщения на странице

у меня в коде эту функцию выполняет promise.All()
если я правильно понимаю, то мой printResult() сработает
только если все промисы с данными будут в состоянии
resolve значит у меня либо все посты вывалятся,
либо error вылетит. Так?)

P.S. в твоем скрипте, если добавить в пустой файл
выводится пустой тег <pre></pre>