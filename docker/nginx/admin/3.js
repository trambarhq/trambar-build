webpackJsonp([3],{226:function(e,t,i){"use strict";function a(e){return 1===e}i(602),e.exports=function(e){return{"activity-chart-legend-push":"Wysłania zmian","activity-chart-legend-issue":"Zgłoszenia problemu","activity-chart-legend-member":"Zmiany członkostwa","activity-chart-legend-milestone":"Kamienia milowe","activity-chart-legend-repo":"Zmiany katalogu","activity-chart-legend-story":"komunikaty","activity-chart-legend-survey":"Ankiety","activity-chart-legend-task-list":"Listy zadań","activity-chart-legend-wiki":"Zmiany Wiki","app-name":"Trambar","app-title":"Trambar - Konsola administracyjna","confirmation-cancel":"Anuluj","confirmation-confirm":"Przyjmij","confirmation-data-loss":"Czy na pewno chcesz wyrzucić zmiany?","date-range-$start-$end":function(e,t){return e?t?e+"–"+t:e+"–":""},"member-list-$name-with-$username":function(e,t){return e?t?e+" ("+t+")":e:t},"member-list-cancel":"Anuluj","member-list-edit":"Zmień listę członków","member-list-new":"Nowy członek","member-list-save":"Zapisz listę członków","member-list-title":"Członkowie","nav-member-new":"Nowy członek","nav-members":"Członkowie","nav-projects":"Projekty","nav-project-new":"Nowy projekt","nav-repositories":"Katalogi","nav-roles":"Role","nav-role-new":"Nowa rola","nav-servers":"Serwery","nav-server-new":"Nowy serwer","nav-settings":"Ustawienia","nav-users":"Użytkownicy","nav-user-new":"Nowy użytkownik","project-list-$title-with-$name":function(e,t){return e?e+" ("+t+")":t},"project-list-new":"Nowy projekt","project-list-title":"Projekty","project-tooltip-$count-others":function(e){return a(e)?"1 inny":e+" innych"},"repo-list-cancel":"Anuluj","repo-list-edit":"Zmień listę katalogów","repo-list-issue-tracker-enabled-false":"","repo-list-issue-tracker-enabled-true":"Włączony","repo-list-save":"Zapisz listę katalogów","repo-list-title":"Katalogi","role-list-new":"Nowa rola","role-list-title":"Role","role-summary-$title":function(e){var t="Rola";return e&&(t+=": "+e),t},"role-summary-cancel":"Anuluj","role-summary-description":"Opis","role-summary-edit":"Zmień rolę","role-summary-name":"URL Slug","role-summary-save":"Zapisz rolę","role-summary-title":"Nazwa","role-tooltip-$count-others":function(e){return a(e)?"1 inny":e+" innych"},"server-list-new":"Nowy serwer","server-list-title":"Serwery","server-summary-api-token":"API token","server-summary-api-url":"API URL","server-summary-cancel":"Anuluj","server-summary-edit":"Edytuj serwer","server-summary-member-$name":function(e){return"Server: "+e},"server-summary-oauth-id":"OAuth client ID","server-summary-oauth-secret":"OAuth client secret","server-summary-oauth-url":"OAuth URL","server-summary-save":"Zapisz serwer","server-summary-title":"Nazwa","server-summary-type":"Typ serwera","server-type-dropbox":"Dropbox","server-type-facebook":"Facebook","server-type-gitlab":"GitLab","server-type-github":"GitHub","server-type-google":"Google","settings-cancel":"Anuluj","settings-edit":"Edytuj ustawienia","settings-input-languages":"Języki wpisywania","settings-save":"Zapisz ustawienia","settings-site-title":"Nazwa systemu","settings-site-description":"Opis","settings-site-domain-name":"Nazwa domeny","settings-title":"Ustawienia","sign-in-password":"Hasło:","sign-in-submit":"Zaloguj się","sign-in-title":"Logowanie","sign-in-title-oauth":"Zaloguj się przez OAuth","sign-in-username":"Nazwa użytkownika:","table-heading-date-range":"Okres aktywności","table-heading-email":"Adres mailowy","table-heading-issue-tracker":"Bugtracker","table-heading-last-modified":"Zmodyfikowany","table-heading-last-month":"W zeszłym miesiącu","table-heading-name":"Imię i nazwisko","table-heading-projects":"Projekty","table-heading-repositories":"Katalogi","table-heading-roles":"Role","table-heading-server":"Serwer","table-heading-this-month":"W tym miesiącu","table-heading-title":"Nazwa","table-heading-to-date":"Do tej pory","table-heading-type":"Typ","table-heading-users":"Użytkownicy","text-field-placeholder-none":"brak","tooltip-$first-and-$tooltip":function(e,t){return[e," i ",t]},"tooltip-more":"Więcej","user-list-$name-with-$username":function(e,t){return e?t?e+" ("+t+")":e:t},"user-list-approve":"Zatwierdź użytkowników","user-list-cancel":"Anuluj","user-list-new":"Nowy użytkownik","user-list-save":"Zatwierdź wybranych","user-list-title":"Użytkownicy","user-list-user-$type-$approved":function(e,t){var i;switch(e){case"guest":i="Gość";break;case"member":i="Członek zespołu";break;case"admin":i="Administrator"}return t||(i+=" (niezatwierdzony)"),i}}}},602:function(e,t,i){!function(e,t){t(i(20))}(0,function(e){"use strict";function t(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function i(e,i,a){var r=e+" ";switch(a){case"ss":return r+(t(e)?"sekundy":"sekund");case"m":return i?"minuta":"minutę";case"mm":return r+(t(e)?"minuty":"minut");case"h":return i?"godzina":"godzinę";case"hh":return r+(t(e)?"godziny":"godzin");case"MM":return r+(t(e)?"miesiące":"miesięcy");case"yy":return r+(t(e)?"lata":"lat")}}var a="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),r="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");return e.defineLocale("pl",{months:function(e,t){return e?""===t?"("+r[e.month()]+"|"+a[e.month()]+")":/D MMMM/.test(t)?r[e.month()]:a[e.month()]:a},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:i,m:i,mm:i,h:i,hh:i,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:i,y:"rok",yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});