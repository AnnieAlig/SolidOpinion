/****
 * Module:   Parameter Embed
 * Author:   SNT R&D
 * Version:  v3.11.01
 * Compiled: 2017-08-31 20:44:26
 ****/
!function(){function n(){var n=t(),e=n.split(".");if(e.length<3)return n;var r=e.slice(-2).join("."),i=e.slice(-3).join(".");return-1!==["co.uk","com.au","go.com"].indexOf(r)||-1!==["fiostrending.verizon.com"].indexOf(i)||-1!==e.slice(-3,-2)[0].indexOf("chatter")?i:r}function t(){var n=window,t;try{for(var e=0;e++<100&&n!==n.top;){if(void 0===n.parent.document.body)throw"Safari Error";n=n.parent}}catch(n){}if(n===n.top)t=n.location.host;else{var r=n.document.referrer.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);t=r&&r[1]}if(-1!==[void 0,null,!1].indexOf(t))throw"Error finding host";return t}function e(){if(void 0!==document.currentScript&&-1!==document.currentScript.src.indexOf(c))return document.currentScript;for(var n=document.getElementsByTagName("script"),t=0;t<n.length;t++)if("string"==typeof n[t].src&&-1!==n[t].src.indexOf(c))return n[t];throw"currentScript not found"}function r(n,t){var e=n.src.split("?");if(e.length<2)return{};for(var r=e[1].split("&"),i=0;i<r.length;i++){var o=r[i].split("=");t[o[0]]=o[1]||""}return t}function i(){for(var n=window,t,e=20,r=0,i;n!==window.top&&r++<20;){i=null;try{void 0!==n.frameElement&&null!==n.frameElement&&(i=n.frameElement)}catch(n){}if(null!==i&&"SYNAPIFR"===i.classList.value)throw"SNT Loop Detected";try{if(void 0===n.parent.document.body)throw"Safari Error";t=n.parent.document.body,n=n.parent}catch(n){r=20}}return n}function o(n,t,e){n.igloo_que=n.igloo_que||new n.Array;var r=new n.Object;r.div=t,r.id=n.igloo_que.length,r.win=window,r.ig_params=e,e.que_id=r.id,n.igloo_que.push(r)}var a={uri:"embeds/football_all/dynamic_300x600/partner.js",mdb:{subd:!1,src:"embeds/football_all/dynamic_300x600/partner.js",widW:300,widH:600,adW:300,adH:250,ofx:0,ofY:350,cat:"nflncaaf",type:"dynamic_nflncaaf",remn:!1,widU:"//w1.synapsys.us/widgets/dynamic_widget/dynamic_widget.html"},ig:{adW:300,adH:250,widW:300,widH:350,type:"dynamic_nflncaaf",remn:!1},adUnitName:"_sports_widget_300x250"},c="//content.synapsys.us/"+a.uri,d=n(),u=e(),s=i(),l=s.document.createElement("script");o(s,u,a.ig),a.ig.dom=d,a.ig.rand=1e19*Math.random(),l.src="//content.synapsys.us/l/n/igloo.php?"+Object.keys(a.ig).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(a.ig[n])}).join("&"),u.src="",s.document.body.appendChild(l)}();
//# sourceMappingURL=/maps/football_all/dynamic_300x600/partner.js.map