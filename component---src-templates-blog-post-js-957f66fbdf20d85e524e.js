(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),c=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return m(t||r).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),r=p(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),c.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var x=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+o+s+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,n=e.spreadProps,i=c.default.createElement(C,(0,l.default)({src:t},n));return r.length>1?c.default.createElement("picture",null,a(r),i):i},C=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=p(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,j=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:x?1:0,transition:j?"opacity "+y+"ms":"none"},s),z="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},j&&k,{},s,{},f),B={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:S};if(g){var T=g,N=m(g);return c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),z&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},j&&k)}),N.base64&&c.default.createElement(L,{src:N.base64,spreadProps:B,imageVariants:T,generateSources:R}),N.tracedSVG&&c.default.createElement(L,{src:N.tracedSVG,spreadProps:B,imageVariants:T,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(C,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:r,title:t,loading:w},N,{imageVariants:T}))}}))}if(h){var D=h,X=m(h),G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:X.width,height:X.height},i);return"inherit"===i.display&&delete G.display,c.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(X.srcSet)},z&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:z,width:X.width,opacity:this.state.imgLoaded?0:1,height:X.height},j&&k)}),X.base64&&c.default.createElement(L,{src:X.base64,spreadProps:B,imageVariants:D,generateSources:R}),X.tracedSVG&&c.default.createElement(L,{src:X.tracedSVG,spreadProps:B,imageVariants:D,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,E(D),c.default.createElement(C,{alt:r,title:t,width:X.width,height:X.height,sizes:X.sizes,src:X.src,crossOrigin:this.props.crossOrigin,srcSet:X.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:r,title:t,loading:w},X,{imageVariants:D}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});j.propTypes={resolutions:P,sizes:z,fixed:d.default.oneOfType([P,d.default.arrayOf(P)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=j;t.default=k},"A2+M":function(e,t,r){var a=r("X8hv");e.exports={MDXRenderer:a}},I5cv:function(e,t,r){var a=r("XKFU"),n=r("Kuth"),i=r("2OiF"),o=r("y3w9"),s=r("0/R4"),l=r("eeVq"),c=r("8MEG"),d=(r("dyZX").Reflect||{}).construct,u=l((function(){function e(){}return!(d((function(){}),[],e)instanceof e)})),f=!l((function(){d((function(){}))}));a(a.S+a.F*(u||f),"Reflect",{construct:function(e,t){i(e),o(t);var r=arguments.length<3?e:i(arguments[2]);if(f&&!u)return d(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var a=[null];return a.push.apply(a,t),new(c.apply(e,a))}var l=r.prototype,p=n(s(l)?l:Object.prototype),m=Function.apply.call(e,p,t);return s(m)?m:p}})},INYr:function(e,t,r){"use strict";var a=r("XKFU"),n=r("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(i)},IRdU:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAIAAADzvTiPAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEaUlEQVQ4yzWURyymWxjH32gZZfTee++99xa9915GL1e9XDJEbxnBRLAgStSN2CHYSUwkYiUkiBUrkczGhvub7733LN4c3zn/51+e5xBSUlIyMzPz8/OLi4vLysoqKiqqqqrq6urq6+sbGxv/+n81NDTU1NRwVF5eXlJSUlRUBERITU0VwaWlpZWVlSISWHNzc0tLS1tbW3t7e2tra1NTE+VEMDcLCwsLCgr+gLOzs9lR79u3byISKmCdnZ1/SxZ4CnHEBcAIFPFCWlpaTk4OO37irLq6Gk4R2d3d/Y9kgYccZk6rJAsmUEJycjLMgCnJGRvOurq6hoaGJiYmxsbG+vr6qNLR0UFR8DiHhmvghYSEBDwjGzDCuMRtMAjjEhLGx8cHBgbAQ44jcuGIEgQsxMXFpaeni2BSQS35h4WFGRoampmZubu7+/r6EvXg4CDOqQ4M/7W1tdwRoBU1c4BaflJUVFRVVXVxccnIyEiWLKpDCxghPT094IODg21tbQWCJY/v378PDw8vLCzg4uvXr35+flyanJycnp6GJCQkJCkpaXR0FP1Y5ZTS4IXe3l5gP378ALm3t0ckRkZGOzs719fXNzc39/f3V1dXWPP09CQIHOEiKioqNzcX50J4eDhsBI5sNvLy8rGxsfv7+4eHh78k6/HxEU5ExsTExMfHi035r1W6uroEY2dn5+bmZmBgYGlpibGRkRGiXllZmZmZQRSBIxsqusX8gmQ6EhMTBVK1srIC6eXlpaOjExAQsLa2Bu3q6urp6Sn6d3d3aR5y6D/+8/LyEAhZYGCgEBERQVU84NbJyQkhi4uLFxcX6+vrm5ubR0dHDw8P9I+jdMmCHP02NjbR0dECOvHj6OgoypaVlWUSYCAF2kMjf/78yR5rvKTt7e3z83Nq6enpRUZGCsrKyqglYfSz0dDQMDY2xvDBwcHZ2dnS0hJ9Jl7w0BIH5VxdXWEmPAEAtyEXkcjGCC3g3uzsLFNJCowHIaGW9gJTV1fX0tL6ExhWmRNmC9na2tqEh2ZgWVlZNIMSzBOvDc1I8Pb2Jir8m5ub+/v7C/yNKh8fH8zjmV+h5T0xW3wZIQZD/IdRJlnMPxz29vbOzs4CA2BqaopyPBOD2HYmYXl5eW5uDhiyxacCAeDPz0+aZ21tDUR4enoKCgqiGJlRBTx7jPX39+OT8vQ/NDSUIExMTJitT8man59XU1MTbm9vSVJBQQFCwNzQ19dnw2PEFaY8PDwcHBzg5zYVPz4+Xl5efv/+Dbnw9vZGPWlpaQyDxDPKIWSAeD1IZQQIiYfBayP25+fn19dXyKempoTLy0tS/fLlCw0AbGFhQRW+vCTAIOkiFfkCJtrj42NmnslhhAXGjY4pKSmpqKjQPe4ROz0nIV4snBTCCPHw4Njjn9mmERsbGwKpMBvkBJgSaAaMPZqBW2ohhAjBwywlJUXP7u7u3t/fMS9sbW3JyclxJoIRT88AU4XMSY6NpqYmeKzJyMhg9eTkhJgJ61/RljObhsPmXgAAAABJRU5ErkJggg==","width":50,"height":50,"src":"/static/98adaec5578b77c747bf11266832a0df/58ab1/avatar.png","srcSet":"/static/98adaec5578b77c747bf11266832a0df/58ab1/avatar.png 1x,\\n/static/98adaec5578b77c747bf11266832a0df/ab950/avatar.png 1.5x,\\n/static/98adaec5578b77c747bf11266832a0df/24b23/avatar.png 2x"}}},"site":{"siteMetadata":{"author":"Shubham Chadokar","shortBio":"Developer | Photographer | Writer","social":{"twitter":"schadokar1"}}}}}')},X8hv:function(e,t,r){function a(e,t,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n(i,r.prototype),i}).apply(null,arguments)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("XfO3"),r("HEwt"),r("rE2o"),r("ioFf"),r("rGqo"),r("/SS/"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("/SS/"),r("XfO3"),r("HEwt"),r("a1Th"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var c=r("q1tI"),d=r("7ljp"),u=d.useMDXComponents,f=d.mdx,p=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,n=e.children,o=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["scope","components","children"]),l=u(r),d=p(t),m=c.useMemo((function(){if(!n)return null;var e=s({React:c,mdx:f},d),t=Object.keys(e),r=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(i(t),[""+n])).apply(void 0,[{}].concat(i(r)))}),[n,t]);return c.createElement(m,s({components:l},o))}},yZlL:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("Wbzz"),o=r("A2+M"),s=r("vrFN"),l=r("XOxS"),c=(r("0mN4"),r("IRdU")),d=r("9eSz"),u=r.n(d);var f=function(){var e=c.data,t=e.site,r=e.avatar,a=t.siteMetadata,i=a.author,o=a.social,s=a.shortBio;return n.a.createElement("div",{style:{display:"flex",marginBottom:"4.375rem"}},n.a.createElement(u.a,{fixed:r.childImageSharp.fixed,alt:i,style:{marginRight:"0.875rem",marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",{style:{margin:0}},"Written by ",n.a.createElement("strong",null,i),s?" "+s:"","."," ",o.twitter?n.a.createElement("a",{href:"https://twitter.com/"+o.twitter},"You should follow them on Twitter."):null))},p=r("8GIm"),m=r("Krw4");r("cXBx");function g(e){var t=e.data,r=t.mdx,a=t.site,c=e.pageContext,d=c.previous,u=c.next,g=""+a.siteMetadata.siteUrl+r.fields.slug;return n.a.createElement("div",null,n.a.createElement(s.a,{title:r.frontmatter.title,description:r.frontmatter.description,canonicalLink:r.frontmatter.canonical_link,keywords:r.frontmatter.categories||[],meta:[{name:"twitter:label1",content:"Reading time"},{name:"twitter:data1",content:r.timeToRead+" min read"}]}),n.a.createElement("section",{className:"center blog"},n.a.createElement("article",{className:"container small"},n.a.createElement("header",null,n.a.createElement("h1",null,n.a.createElement(i.Link,{to:"/"},"«")," ",r.frontmatter.title),n.a.createElement("p",null,Object(m.a)(r.frontmatter.date)," • "+Object(m.b)(r.timeToRead)),n.a.createElement(l.a,{items:r.frontmatter.categories})),n.a.createElement(o.MDXRenderer,{scope:{Embed:p.a}},r.body)),n.a.createElement("footer",{className:"container small"},n.a.createElement("small",null,n.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:"https://twitter.com/search?q="+g},"Discuss on Twitter")," ","·"," ",n.a.createElement("a",{target:"_blank",rel:"nofollow noopener noreferrer",href:a.siteMetadata.githubUrl+"/edit/master/content"+r.fields.slug+"index.md"},"Edit this post on GitHub")),n.a.createElement("hr",{style:{margin:"24px 0"}}),n.a.createElement(f,null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,d&&n.a.createElement(i.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),n.a.createElement("li",null,u&&n.a.createElement(i.Link,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →"))))))}r.d(t,"default",(function(){return g})),r.d(t,"pageQuery",(function(){return h}));var h="3879252938"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-957f66fbdf20d85e524e.js.map