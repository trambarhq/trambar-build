webpackJsonp([26],{267:function(e,r,t){"use strict";function s(e){return 1===e}function a(e){if(e<10||e>20&&e<100){var r=e%10;if(2===r||3===r||4===r)return!0}return!1}t(450),e.exports=function(e){return{"action-badge-add":"добавить","action-badge-approve":"утверждать","action-badge-archive":"архивировать","action-badge-disable":"отключить","action-badge-reactivate":"реактивировать","action-badge-remove":"удалить","action-badge-restore":"восстановить","activity-chart-legend-branch":"Ветки","activity-chart-legend-issue":"Отчёты об ошибке","activity-chart-legend-merge":"Слияния","activity-chart-legend-member":"Изменения членства","activity-chart-legend-merge-request":"Запросы слияния","activity-chart-legend-milestone":"Вехи","activity-chart-legend-post":"Сообщения","activity-chart-legend-push":"Помещения","activity-chart-legend-repo":"Изменения репозитория","activity-chart-legend-survey":"Опросы","activity-chart-legend-task-list":"Списки задач","activity-chart-legend-wiki":"Правки wiki","activity-tooltip-$count":function(e){return s(e)?e+" рассказ":a(e)?e+" рассказа":e+" рассказов"},"activity-tooltip-$count-branch":function(e){return s(e)?e+" ветка":a(e)?e+" ветки":e+" веток"},"activity-tooltip-$count-issue":function(e){return s(e)?e+" выпуск":a(e)?e+" выпуска":e+" выпусков"},"activity-tooltip-$count-member":function(e){return s(e)?e+" изменение членства":a(e)?e+" изменения членства":e+" изменений членства"},"activity-tooltip-$count-merge":function(e){return s(e)?e+" слияние":a(e)?e+" слияния":e+" слияний"},"activity-tooltip-$count-merge-request":function(e){return s(e)?e+" запрос слияния":a(e)?e+" запроса слияния":e+" запросов слияния"},"activity-tooltip-$count-milestone":function(e){return s(e)?e+" веха":a(e)?e+" вехи":e+" вех"},"activity-tooltip-$count-post":function(e){return s(e)?e+" сообщение":(a(e),e+" сообщений")},"activity-tooltip-$count-push":function(e){return s(e)?e+" помещение":a(e)?e+" помещения":e+" помещений"},"activity-tooltip-$count-repo":function(e){return s(e)?e+" изменение репозитория":a(e)?e+" изменения репозитория":e+" изменений репозитория"},"activity-tooltip-$count-survey":function(e){return s(e)?e+" опрос":a(e)?e+" опроса":e+" опросов"},"activity-tooltip-$count-task-list":function(e){return s(e)?e+" список задач":a(e)?e+" списка задач":e+" списков задач"},"activity-tooltip-$count-wiki":function(e){return s(e)?e+" правка wiki":a(e)?e+" правки wiki":e+" правок wiki"},"app-name":"Трамбар","app-title":"Трамбар - Административная консоль","confirmation-cancel":"Отмена","confirmation-confirm":"Подтвердить","confirmation-data-loss":"Вы действительно хотите отказаться от внесенных изменений?","date-range-$start-$end":function(e,r){return e?r?e+"–"+r:e+"–":""},"image-album-cancel":"Отмена","image-album-done":"OK","image-album-manage":"Управлять альбомом","image-album-remove":"Удалить выбранное","image-album-select":"Использовать выбранную","image-album-upload":"Загрузить файлы","image-cropping-cancel":"Отмена","image-cropping-select":"OK","image-selector-choose-from-album":"Выбрать из альбома","image-selector-crop-image":"Отрегулируйте размер/положение","image-selector-upload-file":"Загрузить картинку","member-list-$name-with-$username":function(e,r){return e?r?e+" ("+r+")":e:r},"member-list-add":"Добавить пользователя","member-list-approve-all":"Утвердить все запросы","member-list-cancel":"Отмена","member-list-edit":"Редактировать список членов","member-list-reject-all":"Отклонить все запросы","member-list-save":"Сохранить список членов","member-list-status-non-member":"Не член","member-list-status-pending":"Запрос ожидает выполнения","member-list-title":"Члены","nav-member-new":"Новый член","nav-members":"Члены","nav-project-new":"Новый проект","nav-projects":"Проекты","nav-repositories":"Репозитория","nav-role-new":"Новый роль","nav-roles":"Роли","nav-server-new":"Новый сервер","nav-servers":"Серверы","nav-settings":"Настройки","nav-user-new":"Новый пользователь","nav-users":"Пользователи","project-list-$title-with-$name":function(e,r){return e?e+" ("+r+")":r},"project-list-add":"Добавить проект","project-list-cancel":"Отмена","project-list-confirm-archive-$count":function(e){return"Вы действительно хотите архивировать "+(s(e)?"выбранный проект":a(e)?"эти "+e+" проекта":"эти "+e+" проектов")+"?"},"project-list-confirm-restore-$count":function(e){return"Вы действительно хотите восстановить "+(s(e)?"выбранный проект":a(e)?"эти "+e+" проекта":"эти "+e+" проектов")+"?"},"project-list-deleted":"Удаленный","project-list-edit":"Редактировать список проектов","project-list-save":"Сохранить список проектов","project-list-status-archived":"Архивированный","project-list-status-deleted":"Удаленный","project-list-title":"Проекты","project-summary-$title":function(e){var r="Проект";return e&&(r+=": "+e),r},"project-summary-access-control":"Контроль доступа","project-summary-access-control-member-only":"Содержание проекта ограничено только членами","project-summary-access-control-non-member-comment":"Не члены могут комментировать рассказы","project-summary-access-control-non-member-view":"Не члены могут просматривать содержимое","project-summary-add":"Добавить проект","project-summary-archive":"Архивировать проект","project-summary-cancel":"Отмена","project-summary-confirm-archive":"Вы действительно хотите архивировать этот проект?","project-summary-confirm-delete":"Вы действительно хотите удалить этот проект?","project-summary-confirm-restore":"Вы действительно хотите восстановить этот проект?","project-summary-delete":"Удалить проект","project-summary-description":"Описание","project-summary-edit":"Редактировать проект","project-summary-emblem":"Эмблема","project-summary-name":"Идентификатор","project-summary-new-members":"Новые члены","project-summary-new-members-auto-accept-guest":"Гостевые пользователи принимаются автоматически","project-summary-new-members-auto-accept-user":"Постоянные пользователи принимаются автоматически","project-summary-new-members-join-guest":"Гостевые пользователи могут запросить присоединиться к проекту","project-summary-new-members-join-user":"Постоянные пользователи могут запросить присоединиться к проекту","project-summary-new-members-manual":"Участники добавляются вручную","project-summary-other-actions":"Другие действия","project-summary-restore":"Восстановить проект","project-summary-return":"Вернуться в список проектов","project-summary-save":"Сохранить проект","project-summary-statistics":"Деятельность","project-summary-title":"Название","project-tooltip-$count-others":function(e){return s(e)?e+" другой":(a(e),e+" других")},"repo-list-cancel":"Отмена","repo-list-confirm-remove-$count":function(e){return"Вы действительно хотите удалить "+(s(e)?"выбранный репозиторий":a(e)?"эти "+e+" репозитория":"эти "+e+" репозиториев")+" из проекта?"},"repo-list-edit":"Редактировать список репозитория","repo-list-issue-tracker-enabled-false":"","repo-list-issue-tracker-enabled-true":"Включен","repo-list-save":"Сохранить список репозитория","repo-list-title":"Репозитория","repo-summary-$title":function(e){var r="Репозиторий";return e&&(r+=": "+e),r},"repo-summary-cancel":"Отмена","repo-summary-confirm-remove":"Вы действительно хотите удалить этот репозиторий из проекта?","repo-summary-confirm-restore":"Вы действительно хотите снова добавить этот репозиторий в проект?","repo-summary-edit":"Редактировать репозиторий","repo-summary-gitlab-name":"Название проекта GitLab","repo-summary-issue-tracker":"Отслеживание ошибок","repo-summary-issue-tracker-disabled":"Отключен","repo-summary-issue-tracker-enabled":"Включен","repo-summary-remove":"Удалить репозиторий","repo-summary-restore":"Восстановить репозиторий","repo-summary-return":"Вернуться в список репозитория","repo-summary-save":"Сохранить репозиторий","repo-summary-statistics":"Деятельность","repo-summary-title":"Название","repository-tooltip-$count":function(e){return s(e)?e+" репозиторий":a(e)?e+" репозитория":e+" репозиториев"},"role-list-add":"Добавить роль","role-list-cancel":"Отмена","role-list-confirm-disable-$count":function(e){return"Вы действительно хотите отключить "+(s(e)?"эту роль":a(e)?"эти "+e+" роли":"эти "+e+" ролей")+"?"},"role-list-confirm-reactivate-$count":function(e){return"Вы действительно хотите реактивировать "+(s(e)?"эту роль":a(e)?"эти "+e+" роли":"эти "+e+" ролей")+"?"},"role-list-edit":"Редактировать список ролей","role-list-save":"Сохранить список ролей","role-list-status-deleted":"Удаленный","role-list-status-disabled":"Отключен","role-list-title":"Роли","role-summary-$title":function(e){var r="Роль";return e&&(r+=": "+e),r},"role-summary-add":"Добавить роль","role-summary-cancel":"Отмена","role-summary-confirm-delete":"Вы действительно хотите удалить эту роль?","role-summary-confirm-disable":"Вы действительно хотите отключить эту роль?","role-summary-confirm-reactivate":"Вы действительно хотите реактивировать эту роль?","role-summary-delete":"Удалить роль","role-summary-description":"Описание","role-summary-disable":"Отключить роль","role-summary-edit":"Редактировать роль","role-summary-name":"Идентификатор","role-summary-rating":"Приоритет рассказов","role-summary-rating-high":"Высокий","role-summary-rating-low":"Низкий","role-summary-rating-normal":"Нормальный","role-summary-rating-very-high":"Очень высокий","role-summary-rating-very-low":"Очень низкий","role-summary-reactivate":"Реактивировать роль","role-summary-return":"Вернуться в список ролей","role-summary-save":"Сохранить роль","role-summary-title":"Название","role-summary-users":"Пользователи","role-tooltip-$count-others":function(e){return s(e)?e+" другая":a(e)?e+" другие":e+" других"},"server-list-add":"Добавить сервер","server-list-api-access-false":"","server-list-api-access-true":"Получен","server-list-cancel":"Отмена","server-list-confirm-disable-$count":function(e){return"Вы действительно хотите отключить "+(s(e)?"выбранный сервер":a(e)?"эти "+e+" сервера":"эти "+e+" серверов")+"?"},"server-list-confirm-reactivate-$count":function(e){return"Вы действительно хотите реактивировать "+(s(e)?"выбранный сервер":a(e)?"эти "+e+" сервера":"эти "+e+" серверов")+"?"},"server-list-edit":"Редактировать список серверов","server-list-oauth-false":"","server-list-oauth-true":"Включен","server-list-save":"Сохранить список серверов","server-list-status-deleted":"Удаленный","server-list-status-disabled":"Отключен","server-list-title":"Серверы","server-summary-acquire":"Получить доступ к API","server-summary-activities":"Деятельность","server-summary-add":"Добавить сервер","server-summary-api-access":"Доступ к API","server-summary-api-access-acquired":"Получен административный доступ","server-summary-api-access-not-applicable":"Непригодный","server-summary-api-access-pending":"Ожидание действия пользователя","server-summary-cancel":"Отмена","server-summary-confirm-delete":"Вы действительно хотите удалить этот сервер?","server-summary-confirm-disable":"Вы действительно хотите отключить этот сервер?","server-summary-confirm-reactivate":"Вы действительно хотите реактивировать этот сервер?","server-summary-delete":"Удалить сервер","server-summary-disable":"Отключить сервер","server-summary-edit":"Редактировать сервер","server-summary-gitlab-admin":"Администратор GitLab","server-summary-gitlab-external-user":"Внешний пользователь GitLab","server-summary-gitlab-regular-user":"Регулярный пользователь GitLab","server-summary-member-$name":function(e){return"Сервер: "+e},"server-summary-name":"Идентификатор","server-summary-new-user":"Новый пользователь","server-summary-new-users":"Новые пользователи","server-summary-oauth-app-id":"ID приложения","server-summary-oauth-app-key":"Ключ приложения","server-summary-oauth-app-secret":"Секрет приложения","server-summary-oauth-application-id":"ID приложения","server-summary-oauth-application-secret":"Секрет приложения","server-summary-oauth-callback-url":"URL обратного вызова","server-summary-oauth-client-id":"ID клиента","server-summary-oauth-client-secret":"Секрет клиента","server-summary-oauth-gitlab-url":"URL сервера GitLab","server-summary-oauth-redirect-uri":"Перенаправление URI","server-summary-oauth-redirect-url":"Перенаправление URL","server-summary-oauth-site-url":"URL сайта","server-summary-reactivate":"Реактивировать сервер","server-summary-return":"Вернуться в список серверов","server-summary-role-none":"Не назначать роли новым пользователям","server-summary-roles":"Назначение ролей","server-summary-save":"Сохранить сервер","server-summary-system-address-missing":"Адрес системы не был установлен","server-summary-test-oauth":"Протестировать интеграцию OAuth","server-summary-title":"Название","server-summary-type":"Тип сервера","server-summary-user-automatic-approval":"Утверждать новых пользователей автоматически","server-summary-user-import-disabled":"Не регистрировать новых пользователей","server-summary-user-import-gitlab-admin-disabled":"Не импортируйте администраторов GitLab","server-summary-user-import-gitlab-external-user-disabled":"Не импортировать внешних пользователей GitLab","server-summary-user-import-gitlab-user-disabled":"Не импортировать пользователей GitLab","server-summary-user-type-admin":"Администратор","server-summary-user-type-guest":"Гостевой пользователь","server-summary-user-type-moderator":"Модератор","server-summary-user-type-regular":"Постоянный пользователь","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-background-image":"Изображение на заднем плане","settings-cancel":"Отмена","settings-edit":"Редактировать настройки","settings-input-languages":"Языки ввода","settings-push-relay":"Реле сообщений push","settings-save":"Сохранить настройки","settings-site-address":"URL-адрес","settings-site-description":"Описание","settings-site-title":"Название сайта","settings-title":"Настройки","sign-in-$title":function(e){var r="Войти";return e&&(r+=": "+e),r},"sign-in-error-access-denied":"Запрос отклонен","sign-in-error-account-disabled":"В настоящее время отключена учетная запись","sign-in-error-existing-users-only":"Доступ к этой системе может получить только уполномоченный персонал","sign-in-error-restricted-area":"Пользователь не администратор","sign-in-oauth":"Войти через OAuth","sign-in-password":"Пароль:","sign-in-problem-incorrect-username-password":"Неверное имя пользователя или пароль","sign-in-problem-no-support-for-username-password":"Система не принимает пароль","sign-in-problem-unexpected-error":"Неожиданная ошибка","sign-in-submit":"Отправить","sign-in-username":"Имя пользователя:","sign-off-menu-sign-off":"Выйти","table-heading-api-access":"Доступ к API","table-heading-date-range":"Активный период","table-heading-email":"Адрес эл. почты","table-heading-issue-tracker":"Отслеживание ошибок","table-heading-last-modified":"Изменено","table-heading-last-month":"Прошлый месяц","table-heading-name":"Имя и фамилия","table-heading-oauth":"Аутентификация OAuth","table-heading-projects":"Проекты","table-heading-repositories":"Репозитория","table-heading-roles":"Роли","table-heading-server":"Сервер","table-heading-this-month":"Этот месяц","table-heading-title":"Название","table-heading-to-date":"До сих пор","table-heading-type":"Тип","table-heading-users":"Пользователи","task-$seconds":function(e){return s(e)?e+" секунда":a(e)?e+" секунды":e+" секунд"},"task-imported-$count-commit-comments-from-$repo":function(e,r){var t;return t=s(e)?e+" комментарий":a(e)?e+" комментария":e+" комментариев","Импортировано из репозитория «"+r+"» "+t+" к коммиту"},"task-imported-$count-events-from-$repo":function(e,r){var t;return t=s(e)?e+" событие":a(e)?e+" события":e+" событий","Импортировано из репозитория «"+r+"» "+t},"task-imported-$count-issue-comments-from-$repo":function(e,r){var t;return t=s(e)?e+" комментарий":a(e)?e+" комментария":e+" комментариев","Импортировано из репозитория «"+r+"» "+t+" к отчёту об ошибке"},"task-imported-$count-merge-request-comments-from-$repo":function(e,r){var t;return t=s(e)?e+" комментарий":a(e)?e+" комментария":e+" комментариев","Импортировано из репозитория «"+r+"» "+t+" к запросу слияния"},"task-imported-$count-repos":function(e){return"Импортировано "+(s(e)?e+" репозиторий":a(e)?e+" репозитория":e+" репозиториев")},"task-imported-$count-users":function(e){return"Импортировано "+(s(e)?e+" пользователь":a(e)?e+" пользователя":e+" пользователей")},"task-imported-push-with-$count-commits-from-$repo-$branch":function(e,r,t){var i;return i=s(e)?e+" коммитом":(a(e),e+" коммитами"),"Импортировано из ветки «"+t+"» репозитория «"+r+"» помещения с "+i},"task-importing-commit-comments-from-$repo":function(e){return"Импортирования комментариев к коммиту из репозитория «"+e+"»"},"task-importing-events-from-$repo":function(e){return"Импортирования событий из репозитория «"+e+"»"},"task-importing-issue-comments-from-$repo":function(e){return"Импортирования комментариев из репозитория «"+e+"» к отчётом об ошибке"},"task-importing-merge-request-comments-from-$repo":function(e){return"Импортирования комментариев из репозитория «"+e+"» к запросом слияния"},"task-importing-push-from-$repo":function(e){return"Импортирования помещения из репозитория «"+e+"»"},"task-importing-repos":"Импортирования репозиториев","task-importing-users":"Импортирования пользователей","task-installed-$count-hooks":function(e){return"Установлен "+(s(e)?"обратный вызов":a(e)?"обратных вызова":"обратных вызовов")},"task-installing-hooks":"Установка обратных вызовов","task-removed-$count-hooks":function(e){return"Удален "+(s(e)?"обратный вызов":a(e)?"обратных вызова":"обратных вызовов")},"task-removed-$count-repos":function(e){return"Удален "+(s(e)?e+" репозиторий":a(e)?e+" репозитория":e+" репозиториев")},"task-removed-$count-users":function(e){return"Удален "+(s(e)?e+" пользователя":a(e)?e+" пользователя":e+" пользователей")},"task-removing-hooks":"Удаление обратных вызовов","task-updated-$count-repos":function(e){return"Обновлено "+(s(e)?e+" репозиторий":a(e)?e+" репозитория":e+" репозиториев")},"task-updated-$count-users":function(e){return"Обновлено "+(s(e)?e+" пользователя":(a(e),"этих "+e+" пользователей"))},"text-field-placeholder-none":"нет","tooltip-$first-and-$tooltip":function(e,r){return[e," и ",r]},"tooltip-more":"Более","upload-progress-uploading-$count-files-$size-remaining":function(e,r){return"Загрузка "+(s(e)?e+" файл":(a(e),e+" файлов"))+", оставшихся "+r},"user-list-$name-with-$username":function(e,r){return e?r?e+" ("+r+")":e:r},"user-list-add":"Добавить пользователя","user-list-approve-all":"Утвердить все запросы","user-list-cancel":"Отмена","user-list-confirm-disable-$count":function(e){return"Вы действительно хотите отключить "+(s(e)?"выбранного пользователя":(a(e),"этих "+e+" пользователей"))+"?"},"user-list-confirm-reactivate-$count":function(e){return"Вы действительно хотите реактивировать "+(s(e)?"выбранного пользователя":(a(e),"этих "+e+" пользователей"))+"?"},"user-list-edit":"Редактировать список пользователей","user-list-reject-all":"Отклонить все запросы","user-list-save":"Сохранить список пользователей","user-list-status-deleted":"Удаленный","user-list-status-disabled":"Отключен","user-list-status-pending":"Ожидание утверждения","user-list-title":"Пользователи","user-list-type-admin":"Aдминистратор","user-list-type-guest":"Гостевой пользователь","user-list-type-moderator":"Модератор","user-list-type-regular":"Постоянный пользователь","user-summary-$name":function(e){var r="Пользователь";return e&&(r+=": "+e),r},"user-summary-add":"Добавить пользователя","user-summary-cancel":"Отмена","user-summary-confirm-delete":"Вы действительно хотите удалить этого пользователя?","user-summary-confirm-disable":"Вы действительно хотите отключить этого пользователя?","user-summary-confirm-reactivate":"Вы действительно хотите реактивировать этого пользователя?","user-summary-delete":"Удалить пользователя","user-summary-disable":"Отключить пользователя","user-summary-edit":"Редактировать пользователя","user-summary-email":"Адрес электронной почты","user-summary-github":"URL профиля GitHub","user-summary-gitlab":"URL профиля GitLab","user-summary-ichat":"Имя пользователя iChat","user-summary-linkedin":"URL профиля LinkedIn","user-summary-member-$name":function(e){var r="Пользователь";return e&&(r+=": "+e),r},"user-summary-member-edit":"Редактировать члена","user-summary-member-return":"Вернуться в список членов","user-summary-member-save":"Сохранить члена","user-summary-name":"Имя и фамилия","user-summary-phone":"Номер телефона","user-summary-profile-image":"Изображение профиля","user-summary-reactivate":"Реактивировать пользователя","user-summary-return":"Вернуться в список пользователей","user-summary-role-none":"Нет","user-summary-roles":"Роли","user-summary-save":"Сохранить пользователя","user-summary-skype":"Имя пользователя Skype","user-summary-slack":"ID пользователя Slack","user-summary-slack-team":"ID команды Slack","user-summary-social-links":"Социальные сети","user-summary-stackoverflow":"URL профиля StackOverflow","user-summary-statistics":"Деятельность","user-summary-twitter":"Имя пользователя Twitter","user-summary-type":"Тип пользователя","user-summary-type-admin":"Администратор","user-summary-type-guest":"Гостевой пользователь","user-summary-type-moderator":"Модератор","user-summary-type-regular":"Постоянный пользователь","user-summary-username":"Имя пользователя","user-tooltip-$count":function(e){return s(e)?e+" пользователь":a(e)?e+" пользователя":e+" пользователей"},"validation-duplicate-project-name":"Проект с этим идентификатором уже существует","validation-duplicate-role-name":"Роль с этим идентификатором уже существует","validation-duplicate-server-name":"Сервер с этим идентификатором уже существует","validation-duplicate-user-name":"Пользователь с таким именем уже существует","validation-illegal-project-name":"Идентификатор проекта не может быть «global» или «admin»","validation-password-for-admin-only":"Только администраторы могут войти с помощью пароля","validation-required":"Необходимые",welcome:"Добро пожаловать!"}}},450:function(e,r,t){!function(e,r){r(t(6))}(0,function(e){"use strict";function r(e,r){var t=e.split("_");return r%10==1&&r%100!=11?t[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?t[1]:t[2]}function t(e,t,s){var a={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===s?t?"минута":"минуту":e+" "+r(a[s],+e)}var s=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];return e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:s,longMonthsParse:s,shortMonthsParse:s,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,r,t){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,r){switch(r){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})})}});