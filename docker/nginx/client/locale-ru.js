webpackJsonp([16],{336:function(t,e,n){"use strict";function o(t){return 1===t}function r(t){if(t<10||t>20&&t<100){var e=t%10;if(2===e||3===e||4===e)return!0}return!1}function i(t){if(t){if(t.gender)return t.gender;var e=t.split(/\s+/);if(e>1){for(var n=1;n<e.length;n++)if(/а$/.test(e[n]))return"female"}else{var o=t.toLocaleLowerCase();if(o&&c[o])return"female"}}return"male"}function s(t){return"female"===i(t)?"а":""}function a(t){return t?е+"сь":"ся"}n(629),t.exports=function(t){return{"action-contact-by-email":"Связаться по электронной почте","action-contact-by-ichat":"Связаться по ichat","action-contact-by-phone":"Связаться по телефону","action-contact-by-skype":"Связаться по Skype","action-contact-by-slack":"Связаться по Slack","action-contact-by-twitter":"Связаться по Twitter","action-view-github-page":"Просмотреть страницу GitHub","action-view-gitlab-page":"Просмотреть страницу GitLab","action-view-linkedin-page":"Просмотреть страницу LinkedIn","action-view-stackoverflow-page":"Просмотреть страницу StackOverflow","activation-address":"Адрес сервера","activation-cancel":"Отмена","activation-code":"Код активации","activation-ok":"OK","activation-schema":"Проект","alert-$count-new-bookmarks":function(t){return o(t)?t+" новая закладка":r(t)?t+" новые закладки":t+" новых закладок"},"alert-$count-new-notifications":function(t){return o(t)?t+" новое уведомление":r(t)?t+" новых уведомления":t+" новых уведомлений"},"alert-$count-new-stories":function(t){return o(t)?t+" новый рассказ":r(t)?t+" новых рассказа":t+" новых рассказов"},"app-name":"Трамбар","audio-capture-accept":"Принять","audio-capture-cancel":"Отмена","audio-capture-pause":"Приостановить","audio-capture-rerecord":"Пересдавать","audio-capture-resume":"Возобновить","audio-capture-start":"Начать","audio-capture-stop":"Прекратить","bookmark-$count-other-users":function(t){return o(t)?t+" другой пользователь":r(t)?t+" других пользователя":t+" других пользователей"},"bookmark-$count-users":function(t){return o(t)?t+" пользователь":r(t)?t+" пользователя":t+" пользователей"},"bookmark-$name-and-$others-recommend-this":function(t,e,n){return[t+" и ",e," рекомендуют это"]},"bookmark-$name-recommends-this":function(t){return t+" рекомендует это"},"bookmark-$name1-and-$name2-recommend-this":function(t){return[name1," и ",name2," рекомендуют это"]},"bookmark-$you-bookmarked-it":function(t){return"Вы добавили это в закладки"},"bookmark-$you-bookmarked-it-and-$name-recommends-it":function(t,e){return"Вы добавили это в закладки (и "+e+" рекомендует)"},"bookmark-$you-bookmarked-it-and-$others-recommends-it":function(t,e){return["Вы добавили это в закладки (и ",e," рекомендуют)"]},"bookmark-recommendations":"Рекомендации","bookmarks-no-bookmarks":"Без закладок","bottom-nav-bookmarks":"Закладки","bottom-nav-news":"Новости","bottom-nav-notifications":"Уведомления","bottom-nav-people":"Люди","bottom-nav-settings":"Настройки","confirmation-cancel":"Отмена","confirmation-confirm":"Подтвердить","diagnostics-show":"Показать диагностику","diagnostics-show-panel":"Показать эту панель","empty-currently-offline":"Вы не подключены к Интернету","image-editor-page-rendering-in-progress":"Создание предварительного просмотра веб-сайта...","image-editor-poster-extraction-in-progress":"Извлечение предварительного просмотра из видео...","image-editor-upload-in-progress":"Загрузка выполняется...","issue-cancel":"Отмена","issue-clear":"Очистить","issue-ok":"OK","issue-repo":"Репозиторий","issue-title":"Название","list-$count-more":function(t){return"Еще "+t+"..."},"media-close":"Закрыть","media-download-original":"Скачать исходный файл","media-editor-embed":"Встроить","media-editor-remove":"Удалить","media-editor-shift":"Переместить","media-next":"Cледующая","media-previous":"Предыдущая","membership-request-$you-are-now-member":"Вы теперь являетесь участником этого проекта","membership-request-$you-have-requested-membership":"Вы запросили членство в этом проекте","membership-request-cancel":"Отмена","membership-request-join":"Присоединиться","membership-request-ok":"OK","membership-request-proceed":"Проследовать","mobile-device-revoke":"отмени","mobile-device-revoke-are-you-sure":"Вы действительно хотите отменить авторизацию этого устройства?","mobile-setup-address":"Адрес сервера","mobile-setup-close":"Закрыть","mobile-setup-code":"Код авторизации","news-no-stories-by-role":"Никаких рассказов кем-то с этой ролью","news-no-stories-found":"Не найдено совпадающих рассказов","news-no-stories-on-date":"Нет рассказов этой даты","news-no-stories-yet":"Нет рассказов","notification-$name-added-you-as-coauthor":function(t){return t+" предложил"+s(t)+" вам совместно редактировать сообщение"},"notification-$name-commented-on-your-$story":function(t,e){switch(e){case"survey":e="ваш опрос";break;case"task-list":e="ваш список задач";break;case"post":break;default:e="ваш рассказ"}return t+" прокомментировал"+s(t)+" "+e},"notification-$name-completed-task":function(t){s(t);return t+" выполнил задачу в вашем списке"},"notification-$name-likes-your-$story":function(t,e){switch(e){case"survey":e="ваш опрос";break;case"task-list":e="ваш список задач";break;case"post":break;default:e="ваш рассказ"}return t+" любит "+e},"notification-$name-mentioned-you-in-$reaction":function(t,e){return e="в комментарии",t+" упомянул вас "+e},"notification-$name-mentioned-you-in-$story":function(t,e){switch(e){case"survey":e="в опросе";break;case"task-list":e="в списке задач";break;case"post":e="в сообщении";break;case"issue":e="в отчёте об ошибке";break;case"merge-request":e="в запросе слияния";break;default:e="в рассказе"}return t+" упомянул вас "+e},"notification-$name-requested-to-join":function(t){return t+" попросил"+s(t)+" присоединиться к проекту"},"notification-$name-sent-bookmark-to-$story":function(t,e){switch(e){case"survey":e="опрос";break;case"task-list":e="список задач";break;case"post":e="сообщение";break;default:e="рассказ"}return t+" отправил"+s(t)+" вам закладку в "+e},"notification-$name-voted-in-your-survey":function(t){return t+" ответил"+s(t)+" на ваш опрос"},"notification-option-assignment":"Когда вам назначается отчёт об ошибке","notification-option-bookmark":"Когда кто-то отправляет вам закладку","notification-option-coauthor":"Когда кто-то приглашает вас совместно редактировать сообщение","notification-option-comment":"Когда кто-то комментирует ваш рассказ","notification-option-issue":"Когда кто-то открывает отчёт об ошибке","notification-option-join-request":"Когда кто-то хочет присоединиться к проекту","notification-option-like":"Когда кому-то нравится ваш рассказ","notification-option-mention":"Когда кто-то упоминает вас в истории или комментарии","notification-option-merge":"Когда кто-то сливает код в ветку «${branch}»","notification-option-note":"Когда кто-то публикует заметку о коммите или отчёте об ошибке","notification-option-push":"Когда кто-то отправляет код в репозиторий git","notification-option-survey":"Когда кто-то публикует опрос","notification-option-task-completion":"Когда кто-то завершает задачу в вашем списке","notification-option-vote":"Когда кто-то отвечает на ваш опрос","notification-option-web-session":"Когда вы просматриваете этот сайт с помощью веб-браузера","notifications-no-notifications-on-date":"Нет уведомлений на эту дату","notifications-no-notifications-yet":"Пока нет уведомлений","option-add-bookmark":"Добавить закладку","option-add-issue":"Добавить сообщение в баг трекер","option-bump-story":"Продвинуть рассказ","option-edit-comment":"Редактировать комментарий","option-edit-post":"Редактировать сообщение","option-hide-comment":"Скрыть комментарий от гостей","option-hide-story":"Скрыть рассказ от гостей","option-keep-bookmark":"Удерживать закладку","option-remove-comment":"Удалить комментарий","option-remove-story":"Удалить рассказ","option-send-bookmarks":"Отправить закладки другим пользователям","option-send-bookmarks-to-$count-users":function(t){return o(t)?t+" другому пользователю":t+" другим пользователям"},"option-show-media-preview":"Показать прикрепленные носители","option-show-text-preview":"Показать предварительный просмотр текста","option-statistics-biweekly":"Показать действия за последние 14 дней","option-statistics-monthly":"Показать ежемесячные мероприятия","option-statistics-to-date":"Показывать действия на сегодняшний день","people-no-stories-found":"Не найдено совпадающих рассказов","people-no-stories-on-date":"Никаких действий на эту дату","people-no-users-by-role":"Ни один из участников проекта не имеет такой роли","people-no-users-yet":"Пока нет участников проекта","person-no-stories-found":"Не найдено совпадающих рассказов","person-no-stories-on-date":"Нет рассказов этой даты","person-no-stories-yet":"Нет рассказов","photo-capture-accept":"Прими","photo-capture-cancel":"Отмена","photo-capture-retake":"Пересдавай","photo-capture-snap":"Сделать","project-description-close":"Закрыть","project-management-add":"Добавить","project-management-cancel":"Отмена","project-management-description":"описание проекта","project-management-manage":"Управлять списком","project-management-mobile-set-up":"мобильная установка","project-management-remove":"Удалить","project-management-sign-out":"выход","project-management-sign-out-are-you-sure":"Вы действительно хотите выйти с этого сервера?","qr-scanner-cancel":"Отмена","qr-scanner-invalid-qr-code":"Неверный QR-код","qr-scanner-qr-code-found":"QR-код найден","reaction-$name-added-story-to-issue-tracker":function(t){return t+" добавил"+s(t)+" это сообщение в баг трекер"},"reaction-$name-cast-a-vote":function(t){return t+" проголосовал"+s(t)},"reaction-$name-commented-on-branch":function(t){return t+" прокомментировал"+s(t)+" эту ветку"},"reaction-$name-commented-on-issue":function(t){return t+" прокомментировал"+s(t)+" эту проблему"},"reaction-$name-commented-on-merge":function(t){return t+" прокомментировал"+s(t)+" это слияние"},"reaction-$name-commented-on-merge-request":function(t){return t+" прокомментировал"+s(t)+" этот запрос слияния"},"reaction-$name-commented-on-push":function(t){return t+" прокомментировал"+s(t)+" это помещение"},"reaction-$name-completed-a-task":function(t){s(t);return t+" выполнил задачу"},"reaction-$name-is-assigned-to-issue":function(t){s(t);return t+" был назначен на этот отчёт об ошибке"},"reaction-$name-is-assigned-to-merge-request":function(t){s(t);return t+" был назначен на этот запрос слияния"},"reaction-$name-is-editing":function(t){return t+" редактирует комментарий..."},"reaction-$name-is-sending":function(t){return t+" отправляет комментарий..."},"reaction-$name-is-writing":function(t){return t+" пишет комментарий..."},"reaction-$name-likes-this":function(t){return t+" любит это"},"reaction-status-storage-pending":"в ожидании","reaction-status-transcoding":"Tранскодирование","reaction-status-uploading":"Загрузка","role-filter-no-roles":"Роли не определены","search-bar-keywords":"ключевые слова или #hashtags","selection-cancel":"Отмена","selection-ok":"OK","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-device":"Мобильное устройство","settings-devices":"Мобильные устройства","settings-diagnostics":"Диагностика","settings-language":"Язык","settings-mobile-alert":"Мобильное предупреждение","settings-notification":"Уведомление","settings-profile-image":"Изображение профиля","settings-projects":"Проекты","settings-social-networks":"Социальные сети","settings-user-information":"Информация о пользователе","settings-web-alert":"Предупреждение браузера","social-network-github":"URL профиля GitHub","social-network-gitlab":"URL профиля GitLab","social-network-ichat":"Имя пользователя iChat","social-network-linkedin":"URL профиля LinkedIn","social-network-skype":"Имя пользователя Skype","social-network-slack":"ID пользователя Slack","social-network-slack-team":"ID команды Slack","social-network-stackoverflow":"URL профиля StackOverflow","social-network-twitter":"Имя пользователя Twitter","start-activation-add-server":"Добавить проект с другого сервера","start-activation-instructions":function(t){return["Чтобы получить доступ к серверу Трамбар на этом устройстве, сначала войдите в сервер с помощью веб-браузера. Выберите проект, затем перейдите в страницу ",t.settings,". На панели ",t.projects," нажмите ",t.mobileSetup,". На экране появится QR-код. Затем на этом устройстве нажмите кнопку ниже и сканируйте код. В качестве альтернативы вы можете вручную ввести код активации."]},"start-activation-instructions-short":function(t){return["Войдите в систему через веб-браузер, затем сканируйте QR-код показанный на странице ",t.settings," > ",t.mobileSetup]},"start-activation-manual":"Ввод вручную","start-activation-scan-code":"Сканировать QR-код","start-error-access-denied":"Запрос отклонен","start-error-account-disabled":"В настоящее время отключена учетная запись","start-error-existing-users-only":"Доступ к этой системе может получить только уполномоченный персонал","start-error-undefined":"Неожиданная ошибка","start-no-projects":"Нет проектов","start-no-servers":"Нет поставщиков OAuth","start-projects":"Проекты","start-social-login":"Социальный вход","start-system-title-default":"Трамбар","start-welcome":"Добро пожаловать!","start-welcome-again":"Добро пожаловать снова","statistics-bar":"Столбчатая","statistics-line":"Линейная","statistics-pie":"Круговая","story-$count-reactions":function(t){return o(t)?t+" реакция":r(t)?t+" реакции":t+" реакций"},"story-$name-created-$branch-in-$repo":function(t,e,n){return"Создал"+s(t)+" ветку «"+e+"» в репозитории «"+n+"»"},"story-$name-created-$milestone":function(t,e){return"Создал"+s(t)+" веху «"+e+"»"},"story-$name-created-$page":function(t,e){return"Создал"+s(t)+" wiki-страницу «"+e+"»"},"story-$name-created-$repo":function(t,e){var n=(s(t),"Создал репозиторий");return t&&(n+=" «"+e+"»"),n},"story-$name-deleted-$page":function(t,e){return"Удалил"+s(t)+" wiki-страницу «"+e+"»"},"story-$name-joined-$repo":function(t,e){var n=a(s(t)),o="Присоединил"+n+" к репозиторию";return e&&(o+=" «"+e+"»"),o},"story-$name-left-$repo":function(t,e){var n=s(t),o="Оставил"+n+" репозиторий";return e&&(o+=" «"+e+"»"),o},"story-$name-merged-$branches-into-$branch-of-$repo":function(t,e,n,o){var r=s(t),i="Слил"+r+" изменения";if(e&&e.length>0){var a=e.map(function(t){return"«"+t+"»"});i+=" из",e.length>1?i+=" веток":i+=" ветки",i+=" "+a.join(", ")}return i+=" в ветку «"+n+"»",o&&(i+=" репозитория «"+o+"»"),i},"story-$name-opened-issue-$number-$title":function(t,e,n){var o=s(t),r="Открыл"+o+" выпуск "+e;return n&&(r+=": "+n),r},"story-$name-pushed-to-$branch-of-$repo":function(t,e,n){var o=s(t),r="Отправил"+o+" изменения в ветку «"+e+"»";return n&&(r+=" репозитория «"+n+"»"),r},"story-$name-requested-merge-$branch1-into-$branch2":function(t,e,n){return"Попросил"+s(t)+" слить ветку «"+e+"» в ветку «"+n+"»"},"story-$name-updated-$page":function(t,e){return"Обновил"+s(t)+" wiki-страницу «"+e+"»"},"story-add-coauthor":"Добавить соавтора","story-add-remove-coauthor":"Добавить/удалить соавтора","story-audio":"Аудио","story-author-$count-others":function(t){return t+" других"},"story-author-$name1-and-$name2":function(t,e){return[t," и ",e]},"story-cancel":"Отмена","story-cancel-are-you-sure":"Вы действительно хотите покинуть это сообщение?","story-cancel-edit-are-you-sure":"Вы действительно хотите отказаться от своих изменений?","story-coauthors":"Соавторы","story-comment":"Комментарий","story-drop-files-here":"Перетащите медиафайлы здесь","story-file":"Файл","story-issue-current-status":"Текущее состояние:","story-issue-status-closed":"Закрытый","story-issue-status-opened":"Открытый","story-issue-status-reopened":"Вновь открытый","story-like":"Нравиться","story-markdown":"Markdown","story-milestone-due-date":"Срок:","story-milestone-start-date":"Дата начала:","story-options":"Опции","story-paste-image-here":"Изображение, вставленное в текстовый редактор, также окажется здесь","story-pending":"В ожидании...","story-photo":"Фото","story-post":"Опубликовать","story-push-added-$count-files":function(t){return(o(t)?t+" файл":r(t)?t+" файла":t+" файлов")+" добавлено"},"story-push-added-$count-lines":function(t){return(o(t)?t+" линия":r(t)?t+" линии":t+" линий")+" добавлено"},"story-push-components-changed":"Изменено следующие части:","story-push-deleted-$count-files":function(t){return(o(t)?t+" файл":r(t)?t+" файла":t+" файлов")+" удалено"},"story-push-deleted-$count-lines":function(t){return(o(t)?t+" линия":r(t)?t+" линии":t+" линий")+" удалено"},"story-push-modified-$count-files":function(t){return(o(t)?t+" файл":r(t)?t+" файла":t+" файлов")+" изменено"},"story-push-renamed-$count-files":function(t){return(o(t)?t+" файл":r(t)?t+" файла":t+" файлов")+" переименовано"},"story-remove-yourself":"Удалите себя","story-remove-yourself-are-you-sure":"Вы действительно хотите удалить себя как соавтор?","story-status-storage-pending":"в ожидании","story-status-transcoding-$progress":function(t){return"Tранскодирование ("+t+"%)"},"story-status-uploading-$progress":function(t){return"Загрузка ("+t+"%)"},"story-survey":"Опрос","story-task-list":"Список задач","story-video":"Видео","story-vote-submit":"Отправить","telephone-dialog-close":"Закрыть","time-$hours-ago":function(t){return o(t)?"Час назад":r(t)?t+" часа назад":t+" часов назад"},"time-$hr-ago":function(t){return t+" ч. назад"},"time-$min-ago":function(t){return t+" м. назад"},"time-$minutes-ago":function(t){return o(t)?"Минута назад":r(t)?t+" минуты назад":t+" минут назад"},"time-just-now":"Прямо сейчас","time-yesterday":"Вчера","upload-progress-uploading-$count-files-$size-remaining":function(t,e){return"Загрузка "+(o(t)?t+" файл":(r(t),t+" файлов"))+", оставшихся "+e},"user-actions":"Действия","user-activity-$name-created-branch":function(t){return"Создал"+s(t)+" новую ветку"},"user-activity-$name-created-merge-request":function(t){return"Отправил"+s(t)+" a запрос слияния"},"user-activity-$name-created-milestone":function(t){return"Создал"+s(t)+" веху"},"user-activity-$name-created-repo":function(t){return"Создал"+s(t)+" проект git"},"user-activity-$name-edited-wiki-page":function(t){return"Редактировал"+s(t)+" страницу wiki"},"user-activity-$name-joined-repo":function(t){return"Присоединил"+a(s(t))+" к проекту git"},"user-activity-$name-left-repo":function(t){return"Оставил"+s(t)+" проект git"},"user-activity-$name-merged-code":function(t){return"Выполнил"+s(t)+" слияние"},"user-activity-$name-opened-issue":function(t){return"Открыл"+s(t)+" отчёт об ошибке"},"user-activity-$name-posted-$count-audio-clips":function(t,e){var n;return n=o(e)?"аудиоклип":r(e)?e+" аудиоклипа":e+" аудиоклипов","Опубликовал"+s(t)+" "+n},"user-activity-$name-posted-$count-links":function(t,e){var n;return n=o(e)?"веб-ссылка":r(e)?e+" веб-ссылки":e+" веб-ссылок","Опубликовал"+s(t)+" "+n},"user-activity-$name-posted-$count-pictures":function(t,e){var n;return n=o(e)?"фото":(r(e),"фото"),"Опубликовал"+s(t)+" "+n},"user-activity-$name-posted-$count-video-clips":function(t,e){var n;return n=o(e)?"видеоклип":r(e)?e+" видеоклипа":e+" видеоклипов","Опубликовал"+s(t)+" "+n},"user-activity-$name-pushed-code":function(t){return"Отправил"+s(t)+" код в репозиторий"},"user-activity-$name-started-survey":function(t){return"Начал"+s(t)+" опрос"},"user-activity-$name-started-task-list":function(t){return"Начал"+s(t)+" список задач"},"user-activity-$name-wrote-post":function(t){return"Написал"+s(t)+" сообщение"},"user-activity-back":"Назад","user-activity-more":"Более","user-image-remove":"Удалить","user-image-select":"Выбрать","user-image-snap":"Камера","user-info-email":"Адрес электронной почты","user-info-gender":"Пол","user-info-gender-female":"Женский","user-info-gender-male":"Мужской","user-info-gender-unspecified":"Неопределенный","user-info-name":"Имя и фамилия","user-info-phone":"Номер телефона","user-statistics-legend-branch":"Ветки","user-statistics-legend-issue":"Отчёты об ошибке","user-statistics-legend-member":"Изменения членства","user-statistics-legend-merge":"Слияния","user-statistics-legend-merge-request":"Запросы слияния","user-statistics-legend-milestone":"Вехи","user-statistics-legend-post":"Сообщения","user-statistics-legend-push":"Помещения","user-statistics-legend-repo":"Изменения репозитория","user-statistics-legend-survey":"Опросы","user-statistics-legend-task-list":"Списки задач","user-statistics-legend-wiki":"Правки wiki","user-statistics-today":"Cегодня","user-statistics-tooltip-$count-branch":function(t){return o(t)?t+" ветка":r(t)?t+" ветки":t+" веток"},"user-statistics-tooltip-$count-issue":function(t){return o(t)?t+" выпуск":r(t)?t+" выпуска":t+" выпусков"},"user-statistics-tooltip-$count-member":function(t){return o(t)?t+" изменение членства":r(t)?t+" изменения членства":t+" изменений членства"},"user-statistics-tooltip-$count-merge":function(t){return o(t)?t+" слияние":r(t)?t+" слияния":t+" слияний"},"user-statistics-tooltip-$count-merge-request":function(t){return o(t)?t+" запрос слияния":r(t)?t+" запроса слияния":t+" запросов слияния"},"user-statistics-tooltip-$count-milestone":function(t){return o(t)?t+" веха":r(t)?t+" вехи":t+" вех"},"user-statistics-tooltip-$count-post":function(t){return o(t)?t+" сообщение":(r(t),t+" сообщений")},"user-statistics-tooltip-$count-push":function(t){return o(t)?t+" помещение":r(t)?t+" помещения":t+" помещений"},"user-statistics-tooltip-$count-repo":function(t){return o(t)?t+" изменение репозитория":r(t)?t+" изменения репозитория":t+" изменений репозитория"},"user-statistics-tooltip-$count-survey":function(t){return o(t)?t+" опрос":r(t)?t+" опроса":t+" опросов"},"user-statistics-tooltip-$count-task-list":function(t){return o(t)?t+" список задач":r(t)?t+" списка задач":t+" списков задач"},"user-statistics-tooltip-$count-wiki":function(t){return o(t)?t+" правка wiki":r(t)?t+" правки wiki":t+" правок wiki"},"video-capture-accept":"Принять","video-capture-cancel":"Отмена","video-capture-pause":"Приостановить","video-capture-resume":"Возобновить","video-capture-retake":"Пересдавать","video-capture-start":"Начать","video-capture-stop":"Прекратить"}};var c={};["Анна","Алла","Анастасия","Аня","Валерия","Варвара","Варя","Вера","Вероника","Галина","Галя","Дарья","Даша","Екатерина","Елена","Елизавета","Зина","Зинаида","Инна","Ира","Ирина","Катя","Ксения","Ксюша","Лара","Лариса","Лена","Лера","Лида","Лидия","Лиза","Люба","Любовь","Люда","Людмила","Люся","Марина","Мария","Марья","Маша","Мила","Надежда","Надя","Настя","Ната","Наталья","Наташа","Оксана","Ольга","Оля","Света","Светлана","Таня","Татьяна","Юлия","Юля","Яна"].forEach(function(t){c[t.toLocaleLowerCase()]=!0})},629:function(t,e,n){!function(t,e){e(n(7))}(0,function(t){"use strict";function e(t,e){var n=t.split("_");return e%10==1&&e%100!=11?n[0]:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?n[1]:n[2]}function n(t,n,o){var r={ss:n?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:n?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===o?n?"минута":"минуту":t+" "+e(r[o],+t)}var o=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return t.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:o,longMonthsParse:o,shortMonthsParse:o,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(t){if(t.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:n,m:n,mm:n,h:"час",hh:n,d:"день",dd:n,M:"месяц",MM:n,y:"год",yy:n},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(t){return/^(дня|вечера)$/.test(t)},meridiem:function(t,e,n){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(t,e){switch(e){case"M":case"d":case"DDD":return t+"-й";case"D":return t+"-го";case"w":case"W":return t+"-я";default:return t}},week:{dow:1,doy:4}})})}});