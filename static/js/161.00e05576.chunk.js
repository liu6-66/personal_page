(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var r=n(1087),s=n(6842),i=n(7892),a=n.n(i),u=n(184),c=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("/personal_page").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},o=[{title:"Kodee",image:"/images/projects/kodee.png",date:"2023-07",desc:"Built to empower conference interpreters with cutting-edge technologies. "}],h=function(){return(0,u.jsx)(s.Z,{title:"Projects",description:"L",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{children:(0,u.jsx)(r.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),o.map((function(t){return(0,u.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",u="day",c="week",o="month",h="quarter",f="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,o),i=n-s<0,a=e.clone().add(r+(i?-1:1),o);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:c,d:u,D:d,h:a,m:i,s:s,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=p;var D=function(t){return t instanceof x},S=function t(e,n,r){var s;if(!e)return v;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(s=i),n&&(y[i]=n,s=i);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var u=e.name;y[u]=e,s=u}return!r&&s&&(v=s),s||!r&&v},w=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},j=g;j.l=S,j.i=D,j.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t)}var M=p.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return j},M.isValid=function(){return!(this.$d.toString()===l)},M.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return w(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<w(t)},M.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,r=!!j.u(e)||e,h=j.p(t),l=function(t,e){var s=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,M=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case f:return r?l(1,0):l(31,11);case o:return r?l(1,p):l(0,p+1);case c:var v=this.$locale().weekStart||0,y=(m<v?m+7:m)-v;return l(r?M-y:M+(6-y),p);case u:case d:return $(g+"Hours",0);case a:return $(g+"Minutes",1);case i:return $(g+"Seconds",2);case s:return $(g+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var n,c=j.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[u]=h+"Date",n[d]=h+"Date",n[o]=h+"Month",n[f]=h+"FullYear",n[a]=h+"Hours",n[i]=h+"Minutes",n[s]=h+"Seconds",n[r]=h+"Milliseconds",n)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var m=this.clone().set(d,1);m.$d[l]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[j.p(t)]()},M.add=function(r,h){var d,l=this;r=Number(r);var $=j.p(h),m=function(t){var e=w(l);return j.w(e.date(e.date()+Math.round(t*r)),l)};if($===o)return this.set(o,this.$M+r);if($===f)return this.set(f,this.$y+r);if($===u)return m(1);if($===c)return m(7);var p=(d={},d[i]=e,d[a]=n,d[s]=t,d)[$]||1,M=this.$d.getTime()+r*p;return j.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=j.z(this),i=this.$H,a=this.$m,u=this.$M,c=n.weekdays,o=n.months,h=n.meridiem,f=function(t,n,s,i){return t&&(t[n]||t(e,r))||s[n].slice(0,i)},d=function(t){return j.s(i%12||12,t,"0")},$=h||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return j.s(e.$y,4,"0");case"M":return u+1;case"MM":return j.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,o,3);case"MMMM":return f(o,u);case"D":return e.$D;case"DD":return j.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,c,2);case"ddd":return f(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(i);case"HH":return j.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(i,a,!0);case"A":return $(i,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(e.$s);case"ss":return j.s(e.$s,2,"0");case"SSS":return j.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(r,d,l){var $,m=this,p=j.p(d),M=w(r),g=(M.utcOffset()-this.utcOffset())*e,v=this-M,y=function(){return j.m(m,M)};switch(p){case f:$=y()/12;break;case o:$=y();break;case h:$=y()/3;break;case c:$=(v-g)/6048e5;break;case u:$=(v-g)/864e5;break;case a:$=v/n;break;case i:$=v/e;break;case s:$=v/t;break;default:$=v}return l?$:j.a($)},M.daysInMonth=function(){return this.endOf(o).$D},M.$locale=function(){return y[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return j.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},p}(),O=x.prototype;return w.prototype=O,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",u],["$M",o],["$y",f],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,x,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=y[v],w.Ls=y,w.p={},w}()}}]);
//# sourceMappingURL=161.00e05576.chunk.js.map