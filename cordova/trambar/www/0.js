webpackJsonp([0],{367:function(t,n,e){"use strict";function o(t,n){if(2===t)return n?"兩":"两";if(t<10)return s[t];if(t<100){var e="十",o=Math.floor(t/10),r=Math.floor(t%10);return o>1&&(e=s[o]+e),r&&(e+=s[r]),e}return String(t)}t.exports=function(t){var n=!1,e=!1;if(/\-(mo|hk)$/.test(t)?(n=!0,e=!0):/\-(tw)$/.test(t)&&(e=!0),e){if(n){var o={};for(var s in r)o[s]=u[s]||r[s];return o}return r}return i};var r={"action-contact-by-email":"用電子郵件聯繫","action-contact-by-ichat":"用iChat聯繫","action-contact-by-phone":"用電話聯繫","action-contact-by-skype":"用Skype聯繫","action-contact-by-slack":"用Slack聯繫","action-view-github-page":"查看Github個人頁面","action-view-gitlab-page":"查看GitLab個人頁面","action-view-stackoverflow-page":"查看StackOverflow個人頁面","app-name":"電車吧","audio-capture-accept":"接受","audio-capture-cancel":"取消","audio-capture-pause":"暫停","audio-capture-rerecord":"重新錄製","audio-capture-start":"開始","audio-capture-stop":"停止","bookmark-$count-other-users":function(t){return"另外"+o(t)+"個人"},"bookmark-$count-users":function(t){return o(t)+"個人"},"bookmark-$name-and-$users-recommend-this":function(t,n,e){return[t+"和",n,"推薦這個"]},"bookmark-$name-recommends-this":function(t){return t+"推薦這個"},"bookmark-$name1-and-$name2-recommend-this":function(t){return name1+"和"+name2+"推薦這個"},"bookmark-recommendations":"推薦","bookmark-you-bookmarked-it":"你加了這個書籤","bookmark-you-bookmarked-it-and-$name-recommends-it":function(t){return"你加了這個書籤（"+t+"推薦）"},"bookmark-you-bookmarked-it-and-$users-recommends-it":function(t,n,e){return["你加了這個書籤（",n,"推薦）"]},"bottom-nav-bookmarks":"書籤","bottom-nav-news":"信息","bottom-nav-notifications":"通知","bottom-nav-people":"人們","bottom-nav-settings":"設置","comment-$user-cast-a-vote":function(t){return t+"投票"},"comment-$user-commented-on-issue":function(t){return t+"評論了這個問題"},"comment-$user-commented-on-merge-request":function(t){return t+"評論了這個合併請求"},"comment-$user-commented-on-push":function(t){return t+"評論了這個提交"},"comment-$user-completed-a-task":function(t){return t+"完成了一個任務"},"comment-$user-is-assigned-to-issue":function(t){return t+"被分配到這個問題"},"comment-$user-is-typing":function(t){return t+"正在寫評論⋯⋯"},"comment-$user-likes-this":function(t){return t+"喜歡這個"},"list-$count-more":function(t){return"還有"+o(t)+"個⋯⋯"},"media-close":"關閉","media-download-original":"下載原本文件","media-next":"下一個","media-previous":"上一個","notification-$user-commented-on-your-commit":function(t){return t+"評論了你的commit"},"notification-$user-commented-on-your-merge":function(t){return t+"評論了你的merge"},"notification-$user-commented-on-your-story":function(t){return t+"評論了你的公報"},"notification-$user-commented-on-your-survey":function(t){return t+"評論了你的調查"},"notification-$user-commented-on-your-task-list":function(t){return t+"評論了你的任務列表"},"notification-$user-completed-task":function(t){return t+"完成了在你的列表上一個任務"},"notification-$user-likes-your-commit":function(t){return t+"喜歡你的commit"},"notification-$user-likes-your-merge":function(t){return t+"喜歡你的merge"},"notification-$user-likes-your-story":function(t){return t+"喜歡你的公報"},"notification-$user-likes-your-survey":function(t){return t+"喜歡你的調查"},"notification-$user-likes-your-task-list":function(t){return t+"喜歡你的任務列表"},"notification-$user-voted-in-your-survey":function(t){return t+"回答了你的調查"},"option-add-bookmark":"加書籤","option-add-issue":"加問題入跟蹤管理系統","option-bookmark-story":"加書籤","option-edit-post":"編輯訊息","option-hide-post":"非會員看不到","option-send-bookmarks":"發送書籤給他人","option-send-bookmarks-to-$count-users":function(t){return"發送書籤給"+o(t)+"個人"},"option-show-media":"顯示附件媒體","option-show-preview":"顯示課文預覽","photo-capture-accept":"接受","photo-capture-cancel":"取消","photo-capture-retake":"重拍","photo-capture-snap":"拍照","selection-cancel":"取消","selection-ok":"接受","settings-language":"語言","settings-notification":"通知","settings-projects":"項目","settings-user-profile":"用戶資料","statistics-bar":"條圖","statistics-line":"線圖","statistics-pie":"餅圖","story-$count-user-reacted-to-story":function(t){return o(t)+"個人有反應"},"story-add-coauthor":"加合著者","story-add-remove-coauthor":"替代合著者","story-audio":"音頻","story-author-$count-others":function(t){return"另外"+o(t)+"個人"},"story-author-$name-and-$users":function(t,n,e){return[t,"和",n]},"story-author-$name1-and-$name2":function(t,n){return t+"和"+n},"story-cancel":"取消","story-coauthors":"合著者","story-comment":"評論","story-file":"文件","story-issue-current-status":"當前狀態:","story-issue-opened-$number-$title":function(t,n){return"報告了問題"+String(t)+"：《"+n+"》"},"story-issue-status-closed":"關閉","story-issue-status-opened":"開設","story-issue-status-reopened":"重開","story-like":"喜歡","story-markdown":"Markdown","story-member-joined-$repo":function(t){var n="加入了項目";return t&&(n+="《"+t+"》"),n},"story-member-left-$repo":function(t){var n="離開了項目";return t&&(n+="《"+t+"》"),n},"story-milestone-created-$name":function(t){return"加了里程碑《"+t+"》"},"story-milestone-due-date":"截止日期：","story-milestone-start-date":"開始日期：","story-options":"選項","story-pending":"听候⋯⋯","story-photo":"照片","story-post":"發送","story-push-added-$count-files":function(t){return"加了"+o(t)+"個文件"},"story-push-added-$count-lines":function(t){return"加了"+o(t)+"行代碼"},"story-push-modified-$count-files":function(t){return"改了"+o(t)+"行代碼"},"story-push-pushed-to-$branch-of-$repo":function(t,n){var e="推了一些代碼修改入到";return n&&(e+="項目《"+n+"》的"),e+="分支《"+t+"》"},"story-push-removed-$count-files":function(t){return"除了"+num+"個文件"},"story-push-removed-$count-lines":function(t){return"除了"+num+"行代碼"},"story-push-renamed-$count-files":function(t){return"改了"+num+"個文件的名"},"story-repo-created-$name":function(t){var n="創建項目";return t&&(n+="《"+t+"》"),n},"story-survey":"調查","story-task-list":"任務列表","story-video":"視頻","story-vote-submit":"遞交","story-wiki-created-page-with-$title":function(t){return"創建了維基頁面《"+t+"》”"},"story-wiki-deleted-page-with-$title":function(t){return"刪除了維基頁面《"+t+"》”"},"story-wiki-updated-page-with-$title":function(t){return"修正了維基頁面《"+t+"》"},"survey-item-$number":function(t){return"精選"+String(t)},"task-list-item-$number":function(t){return"任務"+String(t)},"user-actions":"行動","user-statistics-legend-issue":"問題","user-statistics-legend-milestone":"里程碑","user-statistics-legend-push":"推送","user-statistics-legend-story":"公報","user-statistics-legend-survey":"調查","user-statistics-legend-task-list":"任務列表","user-statistics-legend-wiki":"維基編輯","video-capture-accept":"接受","video-capture-cancel":"取消","video-capture-pause":"暫停","video-capture-retake":"重新錄製","video-capture-start":"開始","video-capture-stop":"停止"},i=r,u={"action-view-github-page":"睇吓佢嘅Github個人頁面","action-view-gitlab-page":"睇吓佢嘅GitLab個人頁面","action-view-stackoverflow-page":"睇吓佢嘅StackOverflow個人頁面","bookmark-$name-and-$users-recommend-this":function(t,n,e){return[t+"同",n,"推薦呢個"]},"bookmark-$name-recommends-this":function(t){return t+"推薦呢個"},"bookmark-$name1-and-$name2-recommend-this":function(t){return name1+"同"+name2+"推薦呢個"},"bookmark-recommendations":"推薦","bookmark-you-bookmarked-it":"你加咗呢個書籤","bookmark-you-bookmarked-it-and-$name-recommends-it":function(t){return"你加咗呢個書籤（"+t+"推薦）"},"bookmark-you-bookmarked-it-and-$users-recommends-it":function(t,n,e){return["你加咗呢個書籤（",n,"推薦）"]},"comment-$user-cast-a-vote":function(t){return t+"投咗一票"},"comment-$user-commented-on-issue":function(t){return t+"評論咗呢個問題"},"comment-$user-commented-on-merge-request":function(t){return t+"評論咗呢個合併請求"},"comment-$user-commented-on-push":function(t){return t+"評論咗呢個push"},"comment-$user-completed-a-task":function(t){return t+"完成咗一個任務"},"comment-$user-is-assigned-to-issue":function(t){return t+"被分配到呢個問題"},"comment-$user-is-typing":function(t){return t+"現在寫緊評論⋯⋯"},"comment-$user-likes-this":function(t){return t+"鍾意呢個"},"list-$count-more":function(t){return"重有"+o(t)+"個⋯⋯"},"notification-$user-commented-on-your-commit":function(t){return t+"評論咗你嘅commit"},"notification-$user-commented-on-your-merge":function(t){return t+"評論咗你嘅merge"},"notification-$user-commented-on-your-story":function(t){return t+"評論咗你嘅公報"},"notification-$user-commented-on-your-survey":function(t){return t+"評論咗你嘅調查"},"notification-$user-commented-on-your-task-list":function(t){return t+"評論咗你嘅任務列表"},"notification-$user-completed-task":function(t){return t+"完成咗喺你嘅列表嘅上一個任務"},"notification-$user-likes-your-commit":function(t){return t+"鍾意你嘅commit"},"notification-$user-likes-your-merge":function(t){return t+"鍾意你嘅merge"},"notification-$user-likes-your-story":function(t){return t+"鍾意你嘅公報"},"notification-$user-likes-your-survey":function(t){return t+"鍾意你嘅調查"},"notification-$user-likes-your-task-list":function(t){return t+"鍾意你嘅任務列表"},"notification-$user-voted-in-your-survey":function(t){return t+"回答咗你嘅調查"},"option-hide-post":"非會員睇唔到","option-send-bookmarks":"發送書籤畀其他人","option-send-bookmarks-to-$count-users":function(t){return"發送書籤畀"+o(t)+"個人"},"story-author-$name-and-$users":function(t,n,e){return[t,"同",n]},"story-author-$name1-and-$name2":function(t,n){return t+"同"+n},"story-issue-opened-$number-$title":function(t,n){return"報告咗問題"+String(t)+"：《"+n+"》"},"story-like":"鍾意","story-member-joined-$repo":function(t){var n="加入咗project";return t&&(n+="《"+t+"》"),n},"story-member-left-$repo":function(t){var n="離開咗project";return t&&(n+="《"+t+"》"),n},"story-milestone-created-$name":function(t){return"加咗里程碑《"+t+"》"},"story-pending":"等一陣⋯⋯","story-push-added-$count-files":function(t){return"加咗"+o(t)+"個文件"},"story-push-added-$count-lines":function(t){return"加咗"+o(t)+"行代碼"},"story-push-modified-$count-files":function(t){return"改咗"+o(t)+"行代碼"},"story-push-pushed-to-$branch-of-$repo":function(t,n){var e="推咗一啲代碼修改入到";return n&&(e+="project《"+n+"》嘅"),e+="branch《"+t+"》"},"story-push-removed-$count-files":function(t){return"除咗"+num+"個文件"},"story-push-removed-$count-lines":function(t){return"除咗"+num+"行代碼"},"story-push-renamed-$count-files":function(t){return"改咗"+num+"個文件嘅名"},"story-repo-created-$name":function(t){var n="加咗project";return t&&(n+="《"+t+"》"),n},"story-wiki-created-page-with-$title":function(t){return"加咗Wiki頁面《"+t+"》”"},"story-wiki-deleted-page-with-$title":function(t){return"刪除咗Wiki頁面《"+t+"》”"},"story-wiki-updated-page-with-$title":function(t){return"改咗Wiki頁面《"+t+"》"}},s=["〇","一","二","三","四","五","六","七","八","九"]}});