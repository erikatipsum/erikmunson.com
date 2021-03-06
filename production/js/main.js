/* Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */
var lettering=lettering||{};(function(){var opts={"chars":["char",""],"words":["word"," "],"lines":["line","<br />"]};lettering.splitter=function(e,t){var type=opts[t||"chars"],splitBy=type[1],d='',c=0,arr,a,m;arr=e.childNodes;for(var i=0,len=arr.length;i<len;i++){if(arr[i].nodeType===3&&type[0]==="line"){c++;m=c%2;d+=["<span class='",type[0]+c,((m!==0)?" even":" odd"),"'>",arr[i].nodeValue,"</span>",splitBy].join("");}else if(arr[i].nodeType===3&&type[0]!=="line"){a=arr[i].data.split(splitBy);for(var k=0,len2=a.length;k<len2;k++){c++;m=c%2;d+=["<span class='",type[0]+c,((m!==0)?" even":" odd"),"'>",a[k],"</span>",splitBy].join("");}}}
c=0;e.innerHTML=d;};})();

// Widow Tamer JS by Nathan C. Ford http://artequalswork.com
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2={u:{C:\'p,1i,1j\',v:14,6:\'1k\',D:\'1l\',O:\'1m\'},E:P 1n(),1o:4(a){3(w.1p===\'1q\')2.F(a);2.G(\'1r\',4(){2.F(a)})},F:4(a){5 m=a.6;1s(m){k\'8-Q\':k\'R\':k\'8-S\':k\'T-x\':k\'U-x\':k V:3(a.D==\'H\'&&m&&m.I(\'8\')){W.X(\'Y 6. 1t 1u 11 H 1v 8.\')}7 2.J(a);12;1w:W.X(\'Y 6. 1x 11 1y 8-Q, 8-S, T-x, 1z U-x.\')}},J:4(a){5 b=P 1A();3(a){1B(i 1C 2.u){3(a[i])b[i]=(i==\'6\'&&a[i].I(\'-\'))?2.13(a[i]):a[i];7 b[i]=2.u[i]}}7 b=2.u;3(w.15){5 d=w.15(b.C),i=0;16(i<d.K){5 t=d[i];3(t.L>2.17(t,\'1D-1E\',18)){5 e=t.1F,j=e.K-1,c=1G;16(j>=0){5 f=2.y(e[j]);3(f!=V&&f.K>b.v){c=e[j];12}j--}t.19[b.6]=\'0\';5 g=2.y(c);3(c)2.M(c,t,g,0,b)}i++}2.G(b.O,4(){2.1a(b)})}},y:4(t){l t.N||t.1b},o:4(e,t){3(e.N)e.N=t;7 e.1b=t},M:4(c,t,a,i,b){5 h=t.L;2.o(c,a.1c(0,(b.v*-1)));3(t.L<h){3(b.6==\'R\')2.o(c,2.y(c)+a.1c((b.v*-1)).q(/\\s/g,\'\\1H\'));7{5 d=(b.6.I(\'8\'))?(i/10):(i/1I);3(b.D==\'H\')d=d*-1;t.19[b.6]=d+\'1J\';2.o(c,a);2.M(c,t,a,i+1,b)}}7 2.o(c,a)},1a:4(a){5 b="\'"+a.C.q(/[^a-1d-1K-9\\-\\.]/g,\'\')+"\'";1L(2.E[b]);2.E[b]=1M(4(){2.J(a)},1N)},G:4(e,f){3(B.1e)B.1e(\'1O\'+e,f);7 B.1P(e,f,18)},13:4(s){l s.q(/-([a-1d-Z])/,4(m){l m.q(\'-\',\'\').1f()})},17:4(t,s,n){5 r;3(t.1g)r=t.1g[s.q(/-([A-z])/1Q,4(a,b){l b.1f()})];7 3(B.1h)r=w.1R.1h(t,1S).1T(s);3(n)l 1U(r);7 l r}};',62,119,'||wt|if|function|var|method|else|padding||||||||||||case|return|||settext||replace||||opts|chars|document|spacing|text|||window|elements|dir|to|init|bind|neg|match|hunter|length|offsetHeight|tamer|innerText|event|new|right|nbsp|left|word|letter|undefined|console|log|Invalid|||use|break|fixmethod||querySelectorAll|while|getstyle|true|style|onevent|textContent|slice|zA|attachEvent|toUpperCase|currentStyle|getComputedStyle|li|dd|wordSpacing|pos|orientationchange|Array|fix|readyState|complete|load|switch|You|cannot|with|default|Please|either|or|Object|for|in|line|height|childNodes|false|u00a0|100|em|Z0|clearTimeout|setTimeout|250|on|addEventListener|gi|defaultView|null|getPropertyValue|parseFloat'.split('|'),0,{}))

/* Main.js */


var fixWidows = function() {

	var viewport = window.innerWidth;

	wt.fix({

		elements: "p, aside",
		chars: 25,
		method: "nbsp",
		event: "resize"

	});

	if (viewport<755) {

		wt.fix({

			elements: ".educational-background>ul>li",
			chars: 15,
			method: "padding-right",
			event: "resize"

		});

	} else {

		wt.fix({

			elements: ".educational-background>ul>li",
			chars: 15,
			method: "padding-left",
			event: "resize"

		});

	};

};

var initialize = function() {

	var h3_tags = document.getElementsByTagName("h3");

	for (var i = 0; i < h3_tags.length; i++) {

		lettering.splitter(h3_tags[i]);
	};

	fixWidows();

};


window.load = initialize();

window.onresize = fixWidows();