webpackJsonp([27],{281:function(e,r,t){"use strict";function o(e){return 1===e}function a(e){if(e<10||e>20&&e<100){var r=e%10;if(2===r||3===r||4===r)return!0}return!1}t(471),e.exports=function(e){return{"action-badge-add":"dodaj","action-badge-approve":"zatwierdź","action-badge-archive":"zarchiwizuj","action-badge-disable":"dezaktywuj","action-badge-reactivate":"reaktywuj","action-badge-remove":"usuń","action-badge-restore":"przywróć","activity-chart-legend-branch":"Nowe gałęzi","activity-chart-legend-issue":"Zgłoszenia błędu","activity-chart-legend-member":"Zmiany członkostwa","activity-chart-legend-merge":"Scalania zmian","activity-chart-legend-merge-request":"Prośby o połączenie zmian","activity-chart-legend-milestone":"Kamienie milowe","activity-chart-legend-post":"Posty","activity-chart-legend-push":"Wgrywania zmian","activity-chart-legend-repo":"Zmiany repozytorium","activity-chart-legend-survey":"Ankiety","activity-chart-legend-task-list":"Listy zadań","activity-chart-legend-wiki":"Edycje strony wiki","activity-tooltip-$count":function(e){return o(e)?"1 wiadomość":a(e)?e+" wiadomości":e+" widomości"},"activity-tooltip-$count-branch":function(e){return o(e)?"1 gałąź":(a(e),e+" gałęzi")},"activity-tooltip-$count-issue":function(e){return o(e)?"1 zgłoszenie blędu":a(e)?e+" zgłoszenia blędu":e+" zgłoszeń blędu"},"activity-tooltip-$count-member":function(e){return o(e)?"1 zmiana członkostwa":a(e)?e+" zmiany członkostwa":e+" zmian członkostwa"},"activity-tooltip-$count-merge":function(e){return o(e)?"1 scalnie zmian":a(e)?e+" scalenia zmian":e+" scaleń zmian"},"activity-tooltip-$count-merge-request":function(e){return o(e)?"1 prośba o połączenie":a(e)?e+" prośby o połączenie":e+" próśb o połączenie"},"activity-tooltip-$count-milestone":function(e){return o(e)?"1 kamień milowy":a(e)?e+" kamienie milowe":e+" kamieni milowych"},"activity-tooltip-$count-post":function(e){return o(e)?"1 post":a(e)?e+" posty":e+" postów"},"activity-tooltip-$count-push":function(e){return o(e)?"1 wgrywanie zmian":a(e)?e+" wgrywania zmian":e+" wgrywań zmian"},"activity-tooltip-$count-repo":function(e){return o(e)?"1 zmiana repozytorium":a(e)?e+" zmiany repozytorium":e+" zmian repozytorium"},"activity-tooltip-$count-survey":function(e){return o(e)?"1 ankieta":a(e)?e+" ankiety":e+" ankiet"},"activity-tooltip-$count-task-list":function(e){return o(e)?"1 lista zadań":a(e)?e+" listy zadań":e+" list zadań"},"activity-tooltip-$count-wiki":function(e){return o(e)?"1 edycja strony wiki":a(e)?e+" edycje strony wiki":e+" edycjy strony wiki"},"app-name":"Trambar","app-title":"Trambar - Konsola administracyjna","confirmation-cancel":"Anuluj","confirmation-confirm":"Potwierdź","confirmation-data-loss":"Czy na pewno chcesz porzucić wprowadzone zmiany?","date-range-$start-$end":function(e,r){return e?r?e+"–"+r:e+"–":""},"image-album-cancel":"Anuluj","image-album-done":"Ukończ","image-album-manage":"Zarządzaj albumem","image-album-remove":"Usuń wybrane","image-album-select":"Użyj wybranego","image-album-upload":"Prześlij pliki","image-cropping-cancel":"Anuluj","image-cropping-select":"OK","image-selector-choose-from-album":"Wybierz z albumu","image-selector-crop-image":"Dostosuj rozmiar/pozycję","image-selector-upload-file":"Prześlij zdjęcie","member-list-$name-with-$username":function(e,r){return e?r?e+" ("+r+")":e:r},"member-list-add":"Dodaj nowego użytkownika","member-list-approve-all":"Zatwierdź wszystkie prośby","member-list-cancel":"Anuluj","member-list-edit":"Zmodyfikuj listę członków","member-list-reject-all":"Odrzuć wszystkie prośby","member-list-save":"Zapisz listę członków","member-list-status-non-member":"Nie jest członkiem","member-list-status-pending":"Prośba oczekująca na rozpatrzenie","member-list-title":"Członkowie","nav-member-new":"Nowy członek","nav-members":"Członkowie","nav-project-new":"Nowy projekt","nav-projects":"Projekty","nav-repositories":"Repozytoria","nav-role-new":"Nowa rola","nav-roles":"Role","nav-server-new":"Nowy serwer","nav-servers":"Serwery","nav-settings":"Ustawienia","nav-user-new":"Nowy użytkownik","nav-users":"Użytkownicy","project-list-$title-with-$name":function(e,r){return e?e+" ("+r+")":r},"project-list-add":"Dodaj nowy projekt","project-list-cancel":"Anuluj","project-list-confirm-archive-$count":function(e){return"Czy na pewno chcesz zarchiwizować "+(o(e)?"wybrany projekt":a(e)?"te "+e+" wybrane projekty":"tych "+e+" wybranych projektów")+"?"},"project-list-confirm-restore-$count":function(e){return"Czy na pewno chcesz przywrócić "+(o(e)?"wybrany projekt":a(e)?"te "+e+" wybrane projekty":"tych "+e+" wybranych projektów")+"?"},"project-list-deleted":"Usunięty","project-list-edit":"Zmodyfikuj listę projektów","project-list-save":"Zapisz listę projektów","project-list-status-archived":"Zarchiwizowany","project-list-status-deleted":"Usunięty","project-list-title":"Projekty","project-summary-$title":function(e){var r="Projekt";return e&&(r+=": "+e),r},"project-summary-access-control":"Kontrola dostępu","project-summary-access-control-member-only":"Tylko członkowie mogą zobaczyć zawartość projektu","project-summary-access-control-non-member-comment":"Osoby niebędące członkami mogą komentować","project-summary-access-control-non-member-view":"Osoby niebędące członkami mogą zobaczyć zawartość projektu","project-summary-add":"Dodaj nowy projekt","project-summary-archive":"Archive project","project-summary-cancel":"Anuluj","project-summary-confirm-archive":"Czy na pewno chcesz zarchiwizować ten projekt?","project-summary-confirm-delete":"Czy na pewno chcesz usunąć ten projekt?","project-summary-confirm-restore":"Czy na pewno chcesz przywrócić ten projekt?","project-summary-delete":"Usuń projekt","project-summary-description":"Opis","project-summary-edit":"Zmodyfikuj projekt","project-summary-emblem":"Emblemat","project-summary-name":"Identyfikator","project-summary-new-members":"Nowe członkowie","project-summary-new-members-auto-accept-guest":"Goście są akceptowani automatycznie","project-summary-new-members-auto-accept-user":"Zwykli użytkownicy są akceptowani automatycznie","project-summary-new-members-join-guest":"Goście mogą poprosić o dołączenie do projektu","project-summary-new-members-join-user":"Zwykli użytkownicy mogą poprosić o dołączenie do projektu","project-summary-new-members-manual":"Członkowie są dodawani ręcznie","project-summary-other-actions":"Inne operacje","project-summary-restore":"Przywróć projekt","project-summary-return":"Powrót do listy projektów","project-summary-save":"Zapisz projekt","project-summary-statistics":"Działania","project-summary-title":"Nazwa","project-tooltip-$count-others":function(e){return o(e)?"1 inny":a(e)?e+" inne":e+" innych"},"repo-list-cancel":"Anuluj","repo-list-confirm-remove-$count":function(e){return"Czy na pewno chcesz odłączyć "+(o(e)?"wybrane repozytorium":a(e)?"te "+e+" wybrane repozytoria":"tych "+e+" wybranych repozytoriów")+" od projektu?"},"repo-list-edit":"Zmodyfikuj listę repozytoriów","repo-list-issue-tracker-enabled-false":"","repo-list-issue-tracker-enabled-true":"Włączony","repo-list-save":"Zapisz listę repozytoriów","repo-list-title":"Repozytoria","repo-summary-$title":function(e){var r="Repozytorium";return e&&(r+=": "+e),r},"repo-summary-cancel":"Anuluj","repo-summary-confirm-remove":"Czy na pewno chcesz odłączyć to repozytorium od projektu?","repo-summary-confirm-restore":"Czy na pewno chcesz ponownie połączyć to repozytorium do projektu?","repo-summary-edit":"Zmodyfikuj repozytorium","repo-summary-gitlab-name":"Nazwa projektu GitLaba","repo-summary-issue-tracker":"Issue-tracker","repo-summary-issue-tracker-disabled":"Wyłączony","repo-summary-issue-tracker-enabled":"Włączony","repo-summary-remove":"Usuń repozytorium","repo-summary-restore":"Przywróć repozytorium","repo-summary-return":"Powrót do listy repozytoriów","repo-summary-save":"Zapisz repozytorium","repo-summary-statistics":"Działania","repo-summary-title":"Nazwa","repository-tooltip-$count":function(e){return o(e)?"1 repozytorium":a(e)?e+" repozytoria":e+" repozytoriów"},"role-list-add":"Dodaj nową rolę","role-list-cancel":"Anuluj","role-list-confirm-disable-$count":function(e){return"Czy na pewno chcesz dezaktywować "+(o(e)?"wybraną rolę":a(e)?"te "+e+" wybrane role":"tych "+e+" wybranych ról")+"?"},"role-list-confirm-reactivate-$count":function(e){return"Czy na pewno chcesz reaktywować "+(o(e)?"wybraną rolę":a(e)?"te "+e+" wybrane role":"tych "+e+" wybranych ról")+"?"},"role-list-edit":"Zmodyfikuj listę ról","role-list-save":"Zapisz listę ról","role-list-status-deleted":"Usunięta","role-list-status-disabled":"Nieaktywna","role-list-title":"Role","role-summary-$title":function(e){var r="Role";return e&&(r+=": "+e),r},"role-summary-add":"Dodaj nową rolę","role-summary-cancel":"Anuluj","role-summary-confirm-delete":"Czy na pewno chcesz usunąć tę rolę?","role-summary-confirm-disable":"Czy na pewno chcesz dezaktywować tę rolę?","role-summary-confirm-reactivate":"Czy na pewno chcesz reaktywować tę rolę?","role-summary-delete":"Usuń rolę","role-summary-description":"Opis","role-summary-disable":"Dezaktywuj rolę","role-summary-edit":"Zmodyfikuj rolę","role-summary-name":"Identyfikator","role-summary-rating":"Priorytet wiadomości","role-summary-rating-high":"Wysoki","role-summary-rating-low":"Niski","role-summary-rating-normal":"Normalny","role-summary-rating-very-high":"Bardzo wysoki","role-summary-rating-very-low":"Bardzo nisk","role-summary-reactivate":"Reaktywuj rolę","role-summary-return":"Powrót do listy ról","role-summary-save":"Zapisz rolę","role-summary-title":"Nazwa","role-summary-users":"Użytkownicy","role-tooltip-$count-others":function(e){return o(e)?"1 inna":a(e)?e+" inne":e+" innych"},"server-list-add":"Dodaj nowy server","server-list-api-access-false":"","server-list-api-access-true":"Uzyskany","server-list-cancel":"Anuluj","server-list-confirm-disable-$count":function(e){return"Czy na pewno chcesz wyłączyć "+(o(e)?"wybrany serwer":a(e)?"te "+e+" wybrane serwery":"tych "+e+" wybranych serwerów")+"?"},"server-list-confirm-reactivate-$count":function(e){return"Czy na pewno chcesz reaktywować "+(o(e)?"wybrany serwer":a(e)?"te "+e+" wybrane serwery":"tych "+e+" wybranych serwerów")+"?"},"server-list-edit":"Zmodyfikuj listę serwerów","server-list-oauth-false":"","server-list-oauth-true":"Aktywny","server-list-save":"Zapisz listę serwerów","server-list-status-deleted":"Usunięty","server-list-status-disabled":"Wyłączony","server-list-title":"Serwery","server-summary-acquire":"Uzyskaj dostęp API","server-summary-activities":"Działania","server-summary-add":"Dodaj nowy serwer","server-summary-api-access":"Dostęp API","server-summary-api-access-acquired":"Dostęp administracyjny uzyskany","server-summary-api-access-not-applicable":"Nie dotyczy","server-summary-api-access-pending":"Czekając na działania użytkownika","server-summary-cancel":"Anuluj","server-summary-confirm-delete":"Czy na pewno chcesz usunąć ten serwer?","server-summary-confirm-disable":"Czy na pewno chcesz wyłączyć ten serwer?","server-summary-confirm-reactivate":"Czy na pewno chcesz reaktywować ten serwer?","server-summary-delete":"Usuń serwer","server-summary-disable":"Wyłącz serwer","server-summary-edit":"Zmodyfikuj serwer","server-summary-gitlab-admin":"Administrator GitLaba","server-summary-gitlab-external-user":"Zewnętrzny użytkownik GitLaba","server-summary-gitlab-regular-user":"Zwykły użytkownik GitLaba","server-summary-member-$name":function(e){return"Serwer: "+e},"server-summary-name":"Identyfikator","server-summary-new-user":"Nowy użytkownik","server-summary-new-users":"Nowi użytkownicy","server-summary-oauth-app-id":"Identyfikator aplikacji","server-summary-oauth-app-key":"Klucz aplikacji","server-summary-oauth-app-secret":"Sekret aplikacji","server-summary-oauth-application-id":"Identyfikator aplikacji","server-summary-oauth-application-secret":"Sekret aplikacji","server-summary-oauth-callback-url":"Zwrotny URL OAuth","server-summary-oauth-client-id":"Identyfikator klienta","server-summary-oauth-client-secret":"Sekret klienta","server-summary-oauth-gitlab-url":"URL serwera GitLab","server-summary-oauth-redirect-uri":"Zwrotny URI","server-summary-oauth-redirect-url":"Zwrotny URL","server-summary-oauth-site-url":"URL witryny","server-summary-privacy-policy-url":"URL polityki prywatności","server-summary-reactivate":"Reaktywuj serwer","server-summary-return":"Powrót do listy serwerów","server-summary-role-none":"Nie przypisuj żadnych ról nowym użytkownikom","server-summary-roles":"Przypisanie ról","server-summary-save":"Zapisz serwer","server-summary-system-address-missing":"Adres systemowy nie został ustawiony","server-summary-test-oauth":"Przetestuj integrację OAuth","server-summary-title":"Nazwa","server-summary-type":"Typ serwera","server-summary-user-automatic-approval":"Zatwierdź nowych użytkowników automatyczne","server-summary-user-import-disabled":"Nie rejestruj nowych użytkowników","server-summary-user-import-gitlab-admin-disabled":"Nie importuj administratorów GitLaba","server-summary-user-import-gitlab-external-user-disabled":"Nie importuj zewnętrznych użytkowników GitLaba","server-summary-user-import-gitlab-user-disabled":"Nie importuj użytkowników GitLaba","server-summary-user-type-admin":"Administrator","server-summary-user-type-guest":"Gość","server-summary-user-type-moderator":"Moderator","server-summary-user-type-regular":"Zwykły użytkownik","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-github":"GitHub","server-type-gitlab":"GitLab","server-type-google":"Google","server-type-windows":"Windows Live","settings-background-image":"Zdjęcie w tle","settings-cancel":"Anuluj","settings-edit":"Zmodyfikuj ustawienia","settings-input-languages":"Języki wprowadzania","settings-push-relay":"Przekaźnik notyfikacji push","settings-save":"Zapisz ustawienia","settings-site-address":"Adres internetowy","settings-site-description":"Opis","settings-site-title":"Nazwa witryny","settings-title":"Ustawienia","sign-in-$title":function(e){var r="Zaloguj się";return e&&(r+=": "+e),r},"sign-in-error-access-denied":"Wniosek o dostęp odrzucono","sign-in-error-account-disabled":"Konto jest obecnie wyłączone","sign-in-error-existing-users-only":"Tylko upoważniony personel może uzyskać dostęp do tego systemu","sign-in-error-restricted-area":"Użytkownik nie jest administratorem","sign-in-oauth":"Zaloguj się przez OAuth","sign-in-password":"Hasło:","sign-in-problem-incorrect-username-password":"Niepoprawna nazwa użytkownika lub hasło","sign-in-problem-no-support-for-username-password":"System nie akceptuje logowania za pomocą hasła","sign-in-problem-unexpected-error":"Nieoczekiwany błąd","sign-in-submit":"Zaloguj się","sign-in-username":"Nazwa użytkownika:","sign-off-menu-sign-off":"Wyloguj się","table-heading-api-access":"Dostęp API","table-heading-date-range":"Active period","table-heading-email":"E-mail","table-heading-issue-tracker":"Issue-tracker","table-heading-last-modified":"Zmodyfikowano","table-heading-last-month":"Zeszłym miesiąc","table-heading-name":"Imię i nazwisko","table-heading-oauth":"Autoryzacja OAuth","table-heading-projects":"Projekty","table-heading-repositories":"Repositories","table-heading-roles":"Role","table-heading-server":"Serwery","table-heading-this-month":"Bieżący miesiąc","table-heading-title":"Nazwa","table-heading-to-date":"Do tej pory","table-heading-type":"Typ","table-heading-users":"Użytkownicy","task-$seconds":function(e){return o(e)?"1 sekunda":a(e)?e+" sekundy":e+" sekund"},"task-imported-$count-commit-comments-from-$repo":function(e,r){return"Zaimportowano "+(o(e)?"1 komentarz rewizji":(a(e),e+" komentarzy rewizji"))+" z projektu „"+r+"”"},"task-imported-$count-events-from-$repo":function(e,r){return"Zaimportowano "+(o(e)?"1 wydarzenie":a(e)?e+" wydarzenia":e+" wydarzeń")+" z projektu „"+r+"”"},"task-imported-$count-issue-comments-from-$repo":function(e,r){return"Zaimportowano "+(o(e)?"1 komentarz zgłoszenia błędu":(a(e),e+" komentarzy zgłoszenia błędu"))+" z projektu „"+r+"”"},"task-imported-$count-merge-request-comments-from-$repo":function(e,r){return"Zaimportowano "+(o(e)?"1 komentarz prośby o połączenie":(a(e),e+" komentarzy prośby o połączenie"))+" z „"+r+"”"},"task-imported-$count-repos":function(e){return"Zaimportowano "+(o(e)?"1 repozytorium":a(e)?e+" repozytoria":e+" repozytoriów")},"task-imported-$count-users":function(e){return"Zaimportowano "+(o(e)?"1 użytkownika":(a(e),e+" użytkowników"))},"task-imported-push-with-$count-commits-from-$repo-$branch":function(e,r,t){return o(e)?users="1 rewizją":(a(e),users=e+" rewizjami"),"Zaimportowano wgrywanie z undefined do gałęzi „"+t+"” projektu „"+r+"”"},"task-importing-commit-comments-from-$repo":function(e){return"Importowanie komentarzy rewizji projektu „"+e+"”"},"task-importing-events-from-$repo":function(e){return"Importowanie wydarzeń z projektu „"+e+"”"},"task-importing-issue-comments-from-$repo":function(e){return"Importowanie komentarzy zgłowszenia błędu z projektu „"+e+"”"},"task-importing-merge-request-comments-from-$repo":function(e){return"Importowanie komentarzy prośby o połączenie z projektu „"+e+"”"},"task-importing-push-from-$repo":function(e){return"Importowanie wgrywań zmian z projektu „"+e+"”"},"task-importing-repos":"Importowanie repozytoriów","task-importing-users":"Importowanie użytkowników","task-installed-$count-hooks":function(e){return"Zainstalowano "+(o(e)?"1 hak":a(e)?e+" haki":e+" haków")},"task-installing-hooks":"Instalowanie haków","task-removed-$count-hooks":function(e){return"Usunięto "+(o(e)?"1 hak":a(e)?e+" haki":e+" haków")},"task-removed-$count-repos":function(e){return"Usunięto "+(o(e)?"1 repozytorium":a(e)?e+" repozytoria":e+" repozytoriów")},"task-removed-$count-users":function(e){return"Usunięto "+(o(e)?"1 użytkownik":(a(e),e+" użytkowników"))},"task-removing-hooks":"Odinstalowanie haków","task-updated-$count-repos":function(e){return"Zaktualizowano "+(o(e)?"1 repozytorium":a(e)?e+" repozytoria":e+" repozytoriów")},"task-updated-$count-users":function(e){return"Zaktualizowano "+(o(e)?"1 użytkownik":(a(e),e+" użytkowników"))},"text-field-placeholder-none":"brak","tooltip-$first-and-$tooltip":function(e,r){return[e," i ",r]},"tooltip-more":"Więcej","upload-progress-uploading-$count-files-$size-remaining":function(e,r){return"Przesyłanie "+(1===e?"1 płiku":e+" płików")+", pozostało "+r},"user-list-$name-with-$username":function(e,r){return e?r?e+" ("+r+")":e:r},"user-list-add":"Dodaj nowego użytkownika","user-list-approve-all":"Zatwierdź wszystkie prośby","user-list-cancel":"Anuluj","user-list-confirm-disable-$count":function(e){return o(e)?"wybrane konto":a(e)?"te "+e+" wybrane konta":"tych "+e+" wybranych kont","Czy na pewno chcesz wyłączyć "+accouns+"?"},"user-list-confirm-reactivate-$count":function(e){return o(e)?"wybrane konto":a(e)?"te "+e+" wybrane konta":"tych "+e+" wybranych kont","Czy jesteś pewien, że chcesz reaktywować "+acounts+"?"},"user-list-edit":"Zmodyfikuj listę użytkowników","user-list-reject-all":"Odrzuć wszystkie prośby","user-list-save":"Zapisz listę użytkowników","user-list-status-deleted":"Usunięty","user-list-status-disabled":"Konto Wyłączone","user-list-status-pending":" Czekając na zatwierdzenie","user-list-title":"Użytkownicy","user-list-type-admin":"Administrator","user-list-type-guest":"Gość","user-list-type-moderator":"Moderator","user-list-type-regular":"Zwykły użytkownik","user-summary-$name":function(e){var r="Użytkownik";return e&&(r+=": "+e),r},"user-summary-add":"Dodaj nowego użytkownika","user-summary-cancel":"Anuluj","user-summary-confirm-delete":"Czy na pewno chcesz usunąć to konto?","user-summary-confirm-disable":"Czy na pewno chcesz wyłączyć to konto?","user-summary-confirm-reactivate":"Czy na pewno chcesz reaktywować to konto?","user-summary-delete":"Usuń konto użytkownika","user-summary-disable":"Wyłącz konto użytkownika","user-summary-edit":"Zmodyfikuj użytkownika","user-summary-email":"E-mail","user-summary-github":"URL profilu na GitHubie","user-summary-gitlab":"URL profilu na GitLabie","user-summary-ichat":"Nazwa użytkownika iChat","user-summary-linkedin":"URL profilu na LinkedInie","user-summary-member-$name":function(e){var r="Użytkownik";return e&&(r+=": "+e),r},"user-summary-member-edit":"Zmodyfikuj członka","user-summary-member-return":"Powrót do listy członków","user-summary-member-save":"Zapisz członka","user-summary-name":"Imię i nazwisko","user-summary-phone":"Numer telefonu","user-summary-profile-image":"Zdjęcie profilowe","user-summary-reactivate":"Reaktywuj konto użytkownika","user-summary-return":"Powrót do listy użytkowników","user-summary-role-none":"Żadna","user-summary-roles":"Role","user-summary-save":"Zapisz użytkownika","user-summary-skype":"Nazwa użytkownika Skype","user-summary-slack":"Identyfikator użytkownika Slack","user-summary-slack-team":"Identyfikator zespółu Slack","user-summary-social-links":"Linki społecznościowe","user-summary-stackoverflow":"URL profilu na StackOverflowie","user-summary-statistics":"Działania","user-summary-twitter":"Nazwa użytkownika na Twitterze","user-summary-type":"Typ użytkownika","user-summary-type-admin":"Administrator","user-summary-type-guest":"Gość","user-summary-type-moderator":"Moderator","user-summary-type-regular":"Zwykły użytkownik","user-summary-username":"Nazwa użytkownika","user-tooltip-$count":function(e){return o(e)?"1 użytkownik":a(e)?e+" użytkownicy":e+" użytkowników"},"validation-duplicate-project-name":"Projekt z tym identyfikatorem już istnieje","validation-duplicate-role-name":"Rola z tym identyfikatorem już istnieje","validation-duplicate-server-name":"Serwer z tym identyfikatorem już istnieje","validation-duplicate-user-name":"Użytkownik o tej nazwie już istnieje","validation-illegal-project-name":"Identyfikator projektu nie może być „global” ani „admin”","validation-localhost-is-wrong":'"localhost" jest nieprawidłowy',"validation-password-for-admin-only":"Tylko administratorzy mogą logować się przy użyciu hasła","validation-required":"Wymagany",welcome:"Witamy!"}}},471:function(e,r,t){!function(e,r){r(t(7))}(0,function(e){"use strict";function r(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function t(e,t,o){var a=e+" ";switch(o){case"ss":return a+(r(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return a+(r(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return a+(r(e)?"godziny":"godzin");case"MM":return a+(r(e)?"miesiące":"miesięcy");case"yy":return a+(r(e)?"lata":"lat")}}var o="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),a="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,r){return e?""===r?"("+a[e.month()]+"|"+o[e.month()]+")":/D MMMM/.test(r)?a[e.month()]:o[e.month()]:o},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:t,m:t,mm:t,h:t,hh:t,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:t,y:"rok",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});