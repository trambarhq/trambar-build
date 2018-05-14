webpackJsonp(["locale-ru"],{"../node_modules/moment/locale/ru.js":function(e,t,n){!function(e,t){t(n("../node_modules/moment/moment.js"))}(0,function(e){"use strict";function t(e,t){var n=e.split("_");return t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function n(e,n,o){var r={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===o?n?"минута":"минуту":e+" "+t(r[o],+e)}var o=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:o,longMonthsParse:o,shortMonthsParse:o,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:n,m:n,mm:n,h:"час",hh:n,d:"день",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})})},"./locales/ru.js":function(e,t,n){"use strict";function o(e){return 1===e}function r(e){if(e<10||e>20&&e<100){var t=e%10;if(2===t||3===t||4===t)return!0}return!1}function i(e){if(e){if(e.gender)return e.gender;var t=e.split(/\s+/);if(t>1){for(var n=1;n<t.length;n++)if(/а$/.test(t[n]))return"female"}else{var o=e.toLocaleLowerCase();if(o&&c[o])return"female"}}return"male"}function s(e){return"female"===i(e)?"а":""}function a(e){return e?е+"сь":"ся"}n("../node_modules/moment/locale/ru.js"),e.exports=function(e){return{"action-contact-by-email":"Связаться по электронной почте","action-contact-by-ichat":"Связаться по ichat","action-contact-by-phone":"Связаться по телефону","action-contact-by-skype":"Связаться по Skype","action-contact-by-slack":"Связаться по Slack","action-contact-by-twitter":"Связаться по Twitter","action-view-github-page":"Просмотреть страницу GitHub","action-view-gitlab-page":"Просмотреть страницу GitLab","action-view-linkedin-page":"Просмотреть страницу LinkedIn","action-view-stackoverflow-page":"Просмотреть страницу StackOverflow","activation-address":"Адрес сервера","activation-cancel":"Отмена","activation-code":"Код активации","activation-ok":"OK","activation-schema":"Проект","alert-$count-new-bookmarks":function(e){return o(e)?e+" новая закладка":r(e)?e+" новые закладки":e+" новых закладок"},"alert-$count-new-notifications":function(e){return o(e)?e+" новое уведомление":r(e)?e+" новых уведомления":e+" новых уведомлений"},"alert-$count-new-stories":function(e){return o(e)?e+" новый рассказ":r(e)?e+" новых рассказа":e+" новых рассказов"},"app-component-close":"Закрыть","app-name":"Трамбар","audio-capture-accept":"Принять","audio-capture-cancel":"Отмена","audio-capture-pause":"Приостановить","audio-capture-rerecord":"Пересдавать","audio-capture-resume":"Возобновить","audio-capture-start":"Начать","audio-capture-stop":"Прекратить","bookmark-$count-other-users":function(e){return o(e)?e+" другой пользователь":r(e)?e+" других пользователя":e+" других пользователей"},"bookmark-$count-users":function(e){return o(e)?e+" пользователь":r(e)?e+" пользователя":e+" пользователей"},"bookmark-$name-and-$others-recommend-this":function(e,t,n){return[e+" и ",t," рекомендуют это"]},"bookmark-$name-recommends-this":function(e){return e+" рекомендует это"},"bookmark-$name1-and-$name2-recommend-this":function(e){return[name1," и ",name2," рекомендуют это"]},"bookmark-$you-bookmarked-it":function(e){return"Вы добавили это в закладки"},"bookmark-$you-bookmarked-it-and-$name-recommends-it":function(e,t){return"Вы добавили это в закладки (и "+t+" рекомендует)"},"bookmark-$you-bookmarked-it-and-$others-recommends-it":function(e,t){return["Вы добавили это в закладки (и ",t," рекомендуют)"]},"bookmark-recommendations":"Рекомендации","bookmarks-no-bookmarks":"Без закладок","bottom-nav-bookmarks":"Закладки","bottom-nav-news":"Новости","bottom-nav-notifications":"Уведомления","bottom-nav-people":"Люди","bottom-nav-settings":"Настройки","confirmation-cancel":"Отмена","confirmation-confirm":"Подтвердить","development-code-push-$deployment":function(e){return'Получите обновления кода с "'+e+'"'},"development-show-diagnostics":"Показать диагностику","development-show-panel":"Показать эту панель","device-selector-camera-$number":function(e){return"Камера "+e},"device-selector-camera-back":"Задняя","device-selector-camera-front":"Передняя","device-selector-mic-$number":function(e){return"Микрофон "+e},"empty-currently-offline":"Вы не подключены к Интернету","image-editor-page-rendering-in-progress":"Создание предварительного просмотра веб-сайта...","image-editor-poster-extraction-in-progress":"Извлечение предварительного просмотра из видео...","image-editor-upload-in-progress":"Загрузка выполняется...","issue-cancel":"Отмена","issue-delete":"Удалить","issue-ok":"OK","issue-repo":"Репозиторий","issue-title":"Название","list-$count-more":function(e){return"Еще "+e+"..."},"media-close":"Закрыть","media-download-original":"Скачать исходный файл","media-editor-embed":"Встроить","media-editor-remove":"Удалить","media-editor-shift":"Переместить","media-next":"Cледующая","media-previous":"Предыдущая","membership-request-$you-are-member":"Вы являетесь участником этого проекта","membership-request-$you-are-now-member":"Вы теперь являетесь участником этого проекта","membership-request-$you-have-requested-membership":"Вы запросили членство в этом проекте","membership-request-browse":"Просматривать","membership-request-cancel":"Отмена","membership-request-join":"Присоединиться","membership-request-ok":"OK","membership-request-proceed":"Проследовать","membership-request-withdraw":"Отзывать","mobile-device-revoke":"отмени","mobile-device-revoke-are-you-sure":"Вы действительно хотите отменить авторизацию этого устройства?","mobile-setup-address":"Адрес сервера","mobile-setup-close":"Закрыть","mobile-setup-code":"Код авторизации","mobile-setup-project":"Проект","news-no-stories-by-role":"Никаких рассказов кем-то с этой ролью","news-no-stories-found":"Не найдено совпадающих рассказов","news-no-stories-on-date":"Нет рассказов этой даты","news-no-stories-yet":"Нет рассказов","notification-$name-added-you-as-coauthor":function(e){return e+" предложил"+s(e)+" вам совместно редактировать сообщение"},"notification-$name-added-your-post-to-issue-tracker":function(e){return e+" добавил"+s(e)+" ваше сообщение в баг трекер"},"notification-$name-commented-on-your-$story":function(e,t){switch(t){case"survey":t="ваш опрос";break;case"task-list":t="ваш список задач";break;case"post":break;default:t="ваш рассказ"}return e+" прокомментировал"+s(e)+" "+t},"notification-$name-completed-task":function(e){s(e);return e+" выполнил задачу в вашем списке"},"notification-$name-is-assigned-to-your-issue":function(e){var t=s(e);return e+" был"+t+" назначен"+t+" на ваш отчёт об ошибке"},"notification-$name-likes-your-$story":function(e,t){switch(t){case"survey":t="ваш опрос";break;case"task-list":t="ваш список задач";break;case"post":break;default:t="ваш рассказ"}return e+" любит "+t},"notification-$name-mentioned-you-in-$reaction":function(e,t){return t="в комментарии",e+" упомянул вас "+t},"notification-$name-mentioned-you-in-$story":function(e,t){switch(t){case"survey":t="в опросе";break;case"task-list":t="в списке задач";break;case"post":t="в сообщении";break;case"issue":t="в отчёте об ошибке";break;case"merge-request":t="в запросе слияния";break;default:t="в рассказе"}return e+" упомянул вас "+t},"notification-$name-merged-code-to-$branch":function(e,t){return e+" слил"+s(e)+" изменения в ветку «"+t+"»"},"notification-$name-opened-an-issue":function(e){return e+" написал"+s(e)+" отчёт об ошибке"},"notification-$name-posted-a-note-about-your-$story":function(e,t){var n=s(e);switch(t){case"push":t="ваш коммит";break;case"issue":t="ваш отчёт об ошибке";break;case"merge-request":t="ваш слияния"}return e+" прокомментировал"+n+" "+t},"notification-$name-posted-a-survey":function(e){return e+" опубликовал"+s(e)+" опрос"},"notification-$name-pushed-code-to-$branch":function(e,t){return e+" отправил"+s(e)+" изменения в ветку «"+t+"»"},"notification-$name-requested-to-join":function(e){return e+" попросил"+s(e)+" присоединиться к проекту"},"notification-$name-sent-bookmark-to-$story":function(e,t){switch(t){case"survey":t="опрос";break;case"task-list":t="список задач";break;case"post":t="сообщение";break;default:t="рассказ"}return e+" отправил"+s(e)+" вам закладку в "+t},"notification-$name-voted-in-your-survey":function(e){return e+" ответил"+s(e)+" на ваш опрос"},"notification-option-assignment":"Когда кто-то назначен на вашу проблему","notification-option-bookmark":"Когда кто-то отправляет вам закладку","notification-option-coauthor":"Когда кто-то приглашает вас совместно редактировать сообщение","notification-option-comment":"Когда кто-то комментирует ваш рассказ","notification-option-issue":"Когда кто-то пишет отчёт об ошибке","notification-option-join-request":"Когда кто-то хочет присоединиться к проекту","notification-option-like":"Когда кому-то нравится ваш рассказ","notification-option-mention":"Когда кто-то упоминает вас в истории или комментарии","notification-option-merge":"Когда кто-то сливает код в ветку «master»","notification-option-note":"Когда кто-то публикует заметку о коммите или отчёте об ошибке","notification-option-push":"Когда кто-то отправляет код в репозиторий git","notification-option-survey":"Когда кто-то публикует опрос","notification-option-task-completion":"Когда кто-то завершает задачу в вашем списке","notification-option-vote":"Когда кто-то отвечает на ваш опрос","notification-option-web-session":"Когда вы просматриваете этот сайт с помощью веб-браузера","notifications-no-notifications-on-date":"Нет уведомлений на эту дату","notifications-no-notifications-yet":"Пока нет уведомлений","option-add-bookmark":"Добавить закладку","option-add-issue":"Добавить сообщение в баг трекер","option-bump-story":"Продвинуть рассказ","option-edit-comment":"Редактировать комментарий","option-edit-post":"Редактировать сообщение","option-hide-comment":"Скрыть комментарий от гостей","option-hide-story":"Скрыть рассказ от гостей","option-keep-bookmark":"Удерживать закладку","option-remove-comment":"Удалить комментарий","option-remove-story":"Удалить рассказ","option-send-bookmarks":"Отправить закладки другим пользователям","option-send-bookmarks-to-$count-users":function(e){return o(e)?e+" другому пользователю":e+" другим пользователям"},"option-show-media-preview":"Показать прикрепленные носители","option-show-text-preview":"Показать предварительный просмотр текста","option-statistics-biweekly":"Показать действия за последние 14 дней","option-statistics-monthly":"Показать ежемесячные мероприятия","option-statistics-to-date":"Показывать действия на сегодняшний день","people-no-stories-found":"Не найдено совпадающих рассказов","people-no-stories-on-date":"Никаких действий на эту дату","people-no-users-by-role":"Ни один из участников проекта не имеет такой роли","people-no-users-yet":"Пока нет участников проекта","person-no-stories-found":"Не найдено совпадающих рассказов","person-no-stories-on-date":"Нет рассказов этой даты","person-no-stories-yet":"Нет рассказов","photo-capture-accept":"Прими","photo-capture-cancel":"Отмена","photo-capture-retake":"Пересдавай","photo-capture-snap":"Сделать","project-description-close":"Закрыть","project-management-add":"Добавить","project-management-cancel":"Отмена","project-management-description":"описание проекта","project-management-join-project":"присоединиться к проекту","project-management-manage":"Управлять списком","project-management-mobile-set-up":"мобильная установка","project-management-remove":"Удалить","project-management-sign-out":"выход","project-management-sign-out-are-you-sure":"Вы действительно хотите выйти с этого сервера?","project-management-withdraw-request":"аннулировать запрос о членстве","qr-scanner-cancel":"Отмена","qr-scanner-invalid-qr-code":"Неверный QR-код","qr-scanner-qr-code-found":"QR-код найден","reaction-$name-added-story-to-issue-tracker":function(e){return e+" добавил"+s(e)+" это сообщение в баг трекер"},"reaction-$name-cast-a-vote":function(e){return e+" проголосовал"+s(e)},"reaction-$name-commented-on-branch":function(e){return e+" прокомментировал"+s(e)+" эту ветку"},"reaction-$name-commented-on-issue":function(e){return e+" прокомментировал"+s(e)+" эту проблему"},"reaction-$name-commented-on-merge":function(e){return e+" прокомментировал"+s(e)+" это слияние"},"reaction-$name-commented-on-merge-request":function(e){return e+" прокомментировал"+s(e)+" этот запрос слияния"},"reaction-$name-commented-on-push":function(e){return e+" прокомментировал"+s(e)+" это помещение"},"reaction-$name-completed-a-task":function(e){s(e);return e+" выполнил задачу"},"reaction-$name-is-assigned-to-issue":function(e){var t=s(e);return e+" был"+t+" назначен"+t+" на этот отчёт об ошибке"},"reaction-$name-is-assigned-to-merge-request":function(e){s(e);return e+" был назначен на этот запрос слияния"},"reaction-$name-is-editing":function(e){return e+" редактирует комментарий..."},"reaction-$name-is-sending":function(e){return e+" отправляет комментарий..."},"reaction-$name-is-writing":function(e){return e+" пишет комментарий..."},"reaction-$name-likes-this":function(e){return e+" любит это"},"reaction-status-storage-pending":"в ожидании","reaction-status-transcoding":"Tранскодирование","reaction-status-uploading":"Загрузка","role-filter-no-roles":"Роли не определены","search-bar-keywords":"ключевые слова или #hashtags","selection-cancel":"Отмена","selection-ok":"OK","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-development":"Параметры разработчика","settings-device":"Мобильное устройство","settings-devices":"Мобильные устройства","settings-language":"Язык","settings-mobile-alert":"Мобильное предупреждение","settings-notification":"Уведомление","settings-profile-image":"Изображение профиля","settings-projects":"Проекты","settings-social-networks":"Социальные сети","settings-user-information":"Информация о пользователе","settings-web-alert":"Предупреждение браузера","social-network-github":"URL профиля GitHub","social-network-gitlab":"URL профиля GitLab","social-network-ichat":"Имя пользователя iChat","social-network-linkedin":"URL профиля LinkedIn","social-network-skype":"Имя пользователя Skype","social-network-slack":"ID пользователя Slack","social-network-slack-team":"ID команды Slack","social-network-stackoverflow":"URL профиля StackOverflow","social-network-twitter":"Имя пользователя Twitter","start-activation-add-server":"Добавить проект с другого сервера","start-activation-instructions":function(e){return["Чтобы получить доступ к серверу Трамбар на этом устройстве, сначала войдите в сервер с помощью веб-браузера. Выберите проект, затем перейдите в страницу ",e.settings,". На панели ",e.projects," нажмите ",e.mobileSetup,". На экране появится QR-код. Затем на этом устройстве нажмите кнопку ниже и сканируйте код. В качестве альтернативы вы можете вручную ввести код активации."]},"start-activation-instructions-short":function(e){return["Войдите в систему через веб-браузер, затем сканируйте QR-код показанный на странице ",e.settings," > ",e.mobileSetup]},"start-activation-manual":"Ввод вручную","start-activation-new-server":"Новый сервер","start-activation-others-servers":"Доступные серверы","start-activation-return":"Вернуть","start-activation-scan-code":"Сканировать QR-код","start-error-access-denied":"Запрос отклонен","start-error-account-disabled":"В настоящее время отключена учетная запись","start-error-existing-users-only":"Доступ к этой системе может получить только уполномоченный персонал","start-error-undefined":"Неожиданная ошибка","start-no-projects":"Нет проектов","start-no-servers":"Нет поставщиков OAuth","start-projects":"Проекты","start-social-login":"Социальный вход","start-system-title-default":"Трамбар","start-welcome":"Добро пожаловать!","start-welcome-again":"Добро пожаловать снова","statistics-bar":"Столбчатая","statistics-line":"Линейная","statistics-pie":"Круговая","story-$count-reactions":function(e){return o(e)?e+" реакция":r(e)?e+" реакции":e+" реакций"},"story-$name-created-$branch-in-$repo":function(e,t,n){return"Создал"+s(e)+" ветку «"+t+"» в репозитории «"+n+"»"},"story-$name-created-$milestone":function(e,t){return"Создал"+s(e)+" веху «"+t+"»"},"story-$name-created-$page":function(e,t){return"Создал"+s(e)+" wiki-страницу «"+t+"»"},"story-$name-created-$repo":function(e,t){var n=(s(e),"Создал репозиторий");return t&&(n+=" «"+t+"»"),n},"story-$name-deleted-$page":function(e,t){return"Удалил"+s(e)+" wiki-страницу «"+t+"»"},"story-$name-joined-$repo":function(e,t){var n=a(s(e)),o="Присоединил"+n+" к репозиторию";return t&&(o+=" «"+t+"»"),o},"story-$name-left-$repo":function(e,t){var n=s(e),o="Оставил"+n+" репозиторий";return t&&(o+=" «"+t+"»"),o},"story-$name-merged-$branches-into-$branch-of-$repo":function(e,t,n,o){var r=s(e),i="Слил"+r+" изменения";if(t&&t.length>0){var a=t.map(function(e){return"«"+e+"»"});i+=" из",t.length>1?i+=" веток":i+=" ветки",i+=" "+a.join(", ")}return i+=" в ветку «"+n+"»",o&&(i+=" репозитория «"+o+"»"),i},"story-$name-opened-issue-$number-$title":function(e,t,n){var o=s(e),r="Написал"+o+" отчёт "+t;return n&&(r+=": "+n),r},"story-$name-pushed-to-$branch-of-$repo":function(e,t,n){var o=s(e),r="Отправил"+o+" изменения в ветку «"+t+"»";return n&&(r+=" репозитория «"+n+"»"),r},"story-$name-requested-merge-$branch1-into-$branch2":function(e,t,n){return"Попросил"+s(e)+" слить ветку «"+t+"» в ветку «"+n+"»"},"story-$name-updated-$page":function(e,t){return"Обновил"+s(e)+" wiki-страницу «"+t+"»"},"story-add-coauthor":"Добавить соавтора","story-add-remove-coauthor":"Добавить/удалить соавтора","story-audio":"Аудио","story-author-$count-others":function(e){return e+" других"},"story-author-$name1-and-$name2":function(e,t){return[e," и ",t]},"story-cancel":"Отмена","story-cancel-are-you-sure":"Вы действительно хотите покинуть это сообщение?","story-cancel-edit-are-you-sure":"Вы действительно хотите отказаться от своих изменений?","story-coauthors":"Соавторы","story-comment":"Комментарий","story-drop-files-here":"Перетащите медиафайлы здесь","story-file":"Файл","story-issue-current-status":"Текущее состояние:","story-issue-status-closed":"Закрытый","story-issue-status-opened":"Открытый","story-issue-status-reopened":"Вновь открытый","story-like":"Нравиться","story-markdown":"Markdown","story-milestone-due-date":"Срок:","story-milestone-start-date":"Дата начала:","story-options":"Опции","story-paste-image-here":"Изображение, вставленное в текстовый редактор, также окажется здесь","story-pending":"В ожидании...","story-photo":"Фото","story-post":"Опубликовать","story-push-added-$count-files":function(e){return(o(e)?e+" файл":r(e)?e+" файла":e+" файлов")+" добавлено"},"story-push-added-$count-lines":function(e){return(o(e)?e+" линия":r(e)?e+" линии":e+" линий")+" добавлено"},"story-push-components-changed":"Изменено следующие части:","story-push-deleted-$count-files":function(e){return(o(e)?e+" файл":r(e)?e+" файла":e+" файлов")+" удалено"},"story-push-deleted-$count-lines":function(e){return(o(e)?e+" линия":r(e)?e+" линии":e+" линий")+" удалено"},"story-push-modified-$count-files":function(e){return(o(e)?e+" файл":r(e)?e+" файла":e+" файлов")+" изменено"},"story-push-renamed-$count-files":function(e){return(o(e)?e+" файл":r(e)?e+" файла":e+" файлов")+" переименовано"},"story-remove-yourself":"Удалите себя","story-remove-yourself-are-you-sure":"Вы действительно хотите удалить себя как соавтор?","story-status-storage-pending":"в ожидании","story-status-transcoding-$progress":function(e){return"Tранскодирование ("+e+"%)"},"story-status-uploading-$progress":function(e){return"Загрузка ("+e+"%)"},"story-survey":"Опрос","story-task-list":"Список задач","story-video":"Видео","story-vote-submit":"Отправить","telephone-dialog-close":"Закрыть","time-$hours-ago":function(e){return o(e)?"Час назад":r(e)?e+" часа назад":e+" часов назад"},"time-$hr-ago":function(e){return e+" ч. назад"},"time-$min-ago":function(e){return e+" м. назад"},"time-$minutes-ago":function(e){return o(e)?"Минута назад":r(e)?e+" минуты назад":e+" минут назад"},"time-just-now":"Прямо сейчас","time-yesterday":"Вчера","upload-progress-uploading-$count-files-$size-remaining":function(e,t){return"Загрузка "+(o(e)?e+" файл":(r(e),e+" файлов"))+", оставшихся "+t},"user-actions":"Действия","user-activity-$name-created-branch":function(e){return"Создал"+s(e)+" новую ветку"},"user-activity-$name-created-merge-request":function(e){return"Отправил"+s(e)+" a запрос слияния"},"user-activity-$name-created-milestone":function(e){return"Создал"+s(e)+" веху"},"user-activity-$name-created-repo":function(e){return"Создал"+s(e)+" проект git"},"user-activity-$name-edited-wiki-page":function(e){return"Редактировал"+s(e)+" страницу wiki"},"user-activity-$name-joined-repo":function(e){return"Присоединил"+a(s(e))+" к проекту git"},"user-activity-$name-left-repo":function(e){return"Оставил"+s(e)+" проект git"},"user-activity-$name-merged-code":function(e){return"Выполнил"+s(e)+" слияние"},"user-activity-$name-posted-$count-audio-clips":function(e,t){var n;return n=o(t)?"аудиоклип":r(t)?t+" аудиоклипа":t+" аудиоклипов","Опубликовал"+s(e)+" "+n},"user-activity-$name-posted-$count-links":function(e,t){var n;return n=o(t)?"веб-ссылка":r(t)?t+" веб-ссылки":t+" веб-ссылок","Опубликовал"+s(e)+" "+n},"user-activity-$name-posted-$count-pictures":function(e,t){var n;return n=o(t)?"фото":(r(t),"фото"),"Опубликовал"+s(e)+" "+n},"user-activity-$name-posted-$count-video-clips":function(e,t){var n;return n=o(t)?"видеоклип":r(t)?t+" видеоклипа":t+" видеоклипов","Опубликовал"+s(e)+" "+n},"user-activity-$name-pushed-code":function(e){return"Отправил"+s(e)+" код в репозиторий"},"user-activity-$name-reported-issue":function(e){return"Сообщил"+s(e)+" о проблеме"},"user-activity-$name-started-survey":function(e){return"Начал"+s(e)+" опрос"},"user-activity-$name-started-task-list":function(e){return"Начал"+s(e)+" список задач"},"user-activity-$name-wrote-post":function(e){return"Написал"+s(e)+" сообщение"},"user-activity-back":"Назад","user-activity-more":"Более","user-image-adjust":"Настроить","user-image-cancel":"Отмена","user-image-replace":"Заменить","user-image-save":"Сохранить","user-image-select":"Выбрать","user-image-snap":"Камера","user-info-email":"Адрес электронной почты","user-info-gender":"Пол","user-info-gender-female":"Женский","user-info-gender-male":"Мужской","user-info-gender-unspecified":"Неопределенный","user-info-name":"Имя и фамилия","user-info-phone":"Номер телефона","user-statistics-legend-branch":"Ветки","user-statistics-legend-issue":"Отчёты об ошибке","user-statistics-legend-member":"Изменения членства","user-statistics-legend-merge":"Слияния","user-statistics-legend-merge-request":"Запросы слияния","user-statistics-legend-milestone":"Вехи","user-statistics-legend-post":"Сообщения","user-statistics-legend-push":"Помещения","user-statistics-legend-repo":"Изменения репозитория","user-statistics-legend-survey":"Опросы","user-statistics-legend-task-list":"Списки задач","user-statistics-legend-wiki":"Правки wiki","user-statistics-today":"Cегодня","user-statistics-tooltip-$count-branch":function(e){return o(e)?e+" ветка":r(e)?e+" ветки":e+" веток"},"user-statistics-tooltip-$count-issue":function(e){return o(e)?e+" отчёт":r(e)?e+" отчёта":e+" отчётов"},"user-statistics-tooltip-$count-member":function(e){return o(e)?e+" изменение членства":r(e)?e+" изменения членства":e+" изменений членства"},"user-statistics-tooltip-$count-merge":function(e){return o(e)?e+" слияние":r(e)?e+" слияния":e+" слияний"},"user-statistics-tooltip-$count-merge-request":function(e){return o(e)?e+" запрос слияния":r(e)?e+" запроса слияния":e+" запросов слияния"},"user-statistics-tooltip-$count-milestone":function(e){return o(e)?e+" веха":r(e)?e+" вехи":e+" вех"},"user-statistics-tooltip-$count-post":function(e){return o(e)?e+" сообщение":(r(e),e+" сообщений")},"user-statistics-tooltip-$count-push":function(e){return o(e)?e+" помещение":r(e)?e+" помещения":e+" помещений"},"user-statistics-tooltip-$count-repo":function(e){return o(e)?e+" изменение репозитория":r(e)?e+" изменения репозитория":e+" изменений репозитория"},"user-statistics-tooltip-$count-survey":function(e){return o(e)?e+" опрос":r(e)?e+" опроса":e+" опросов"},"user-statistics-tooltip-$count-task-list":function(e){return o(e)?e+" список задач":r(e)?e+" списка задач":e+" списков задач"},"user-statistics-tooltip-$count-wiki":function(e){return o(e)?e+" правка wiki":r(e)?e+" правки wiki":e+" правок wiki"},"video-capture-accept":"Принять","video-capture-cancel":"Отмена","video-capture-pause":"Приостановить","video-capture-resume":"Возобновить","video-capture-retake":"Пересдавать","video-capture-start":"Начать","video-capture-stop":"Прекратить","warning-no-connection":"Нет мгновенного обновления"}};var c={};["Анна","Алла","Анастасия","Аня","Валерия","Варвара","Варя","Вера","Вероника","Галина","Галя","Дарья","Даша","Екатерина","Елена","Елизавета","Зина","Зинаида","Инна","Ира","Ирина","Катя","Ксения","Ксюша","Лара","Лариса","Лена","Лера","Лида","Лидия","Лиза","Люба","Любовь","Люда","Людмила","Люся","Марина","Мария","Марья","Маша","Мила","Надежда","Надя","Настя","Ната","Наталья","Наташа","Оксана","Ольга","Оля","Света","Светлана","Таня","Татьяна","Юлия","Юля","Яна"].forEach(function(e){c[e.toLocaleLowerCase()]=!0})}});