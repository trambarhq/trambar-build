webpackJsonp([5],{262:function(t,e,n){"use strict";n(814),t.exports=function(t){return{"app-name":"Trambar","bottom-nav-bookmarks":"Kirjanmerkit","bottom-nav-news":"Uutiset","bottom-nav-notifications":"Ilmoitukset","bottom-nav-people":"Ihmiset","bottom-nav-settings":"Asetukset","settings-language":"Kieli","settings-notification":"Ilmoittaminen","settings-projects":"Projektit","settings-user-profile":"Käyttäjäprofiili"}}},814:function(t,e,n){!function(t,e){e(n(20))}(0,function(t){"use strict";function e(t,e,a,i){var u="";switch(a){case"s":return i?"muutaman sekunnin":"muutama sekunti";case"ss":return i?"sekunnin":"sekuntia";case"m":return i?"minuutin":"minuutti";case"mm":u=i?"minuutin":"minuuttia";break;case"h":return i?"tunnin":"tunti";case"hh":u=i?"tunnin":"tuntia";break;case"d":return i?"päivän":"päivä";case"dd":u=i?"päivän":"päivää";break;case"M":return i?"kuukauden":"kuukausi";case"MM":u=i?"kuukauden":"kuukautta";break;case"y":return i?"vuoden":"vuosi";case"yy":u=i?"vuoden":"vuotta"}return u=n(t,i)+" "+u}function n(t,e){return t<10?e?i[t]:a[t]:t}var a="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),i=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",a[7],a[8],a[9]];return t.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:e,ss:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})}});