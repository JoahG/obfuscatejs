/*!
 * Obfuscatejs v1.1.3 (https://github.com/JoahG/obfuscatejs)
 * Copyright 2014 Joah Gerstenberg
 * Licensed under MIT License (https://github.com/JoahG/obfuscatejs/blob/master/MIT-LICENSE)
 */
(function(){unObfuscate=function(){$.each($("[data-obfuscated]"),function(e,t){$(t).text(decodeURIComponent($(t).attr("data-obfuscated")))});$.each($("[data-obfuscated-email]"),function(e,t){ema=decodeURIComponent($(t).attr("data-obfuscated-email"));$(t).text($(t).attr("data-obfuscated-message").length>0?decodeURIComponent($(t).attr("data-obfuscated-message")):ema).attr("href","mailto:"+ema+($(t).attr("data-obfuscated-subject").length>0?"?subject="+decodeURIComponent($(t).attr("data-obfuscated-subject")).replace(" ","%20"):"")+($(t).attr("data-obfuscated-subject").length>0&&$(t).attr("data-obfuscated-body").length>0?"&body="+decodeURIComponent($(t).attr("data-obfuscated-body")).replace(" ","%20"):$(t).attr("data-obfuscated-body").length>0?"?body="+decodeURIComponent($(t).attr("data-obfuscated-body")).replace(" ","%20"):""))})};$(document).ready(function(){unObfuscate()});$(document).on("page:change",function(){unObfuscate()})})()
