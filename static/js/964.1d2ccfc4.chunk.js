"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[964],{510:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(689),a=t(87),i="MovieList_container__sSMe5",c="MovieList_movie-list-item__BPg8B",o="MovieList_moviePoster__WQ7V4",s="MovieList_movie-link__clOOF",u=t(184),v=function(e){var r=e.movies,t=(0,n.TH)();return(0,u.jsx)("div",{className:i,children:(0,u.jsx)("ul",{children:r.map((function(e){var r=e.title,n=e.id,i=e.poster_path;return(0,u.jsxs)("li",{className:c,children:[(0,u.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w185".concat(i):"https://live.staticflickr.com/65535/51349451747_f6d7898f2c_n.jpg",alt:r,className:o}),(0,u.jsx)(a.rU,{to:"/movies/".concat(n),state:t,className:s,children:r})]},n)}))})})}},964:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),a=t(439),i=t(311),c=t.n(i),o=t(791),s=t(279),u=t(510),v=t(87),m={moviesContainer:"Movies_moviesContainer__RXtJy",movieList:"Movies_movieList__FD6N4",movieItem:"Movies_movieItem__U+pt+",moviePoster:"Movies_moviePoster__1Y8Zf",movieTitle:"Movies_movieTitle__lz38M",movieRating:"Movies_movieRating__GuAR6",movieOverview:"Movies_movieOverview__VwrNc",movieGenres:"Movies_movieGenres__bn6Fh"},h="SearchForm_searchForm__NsJpF",f="SearchForm_searchInput__h6REp",p="SearchForm_searchButton__AQHxA",l=t(184),_=function(){var e=(0,v.lr)(),r=(0,a.Z)(e,2)[1];return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.searchQuery.value.trim();t&&r({query:t})},className:h,children:[(0,l.jsx)("label",{htmlFor:"searchQuery",children:(0,l.jsx)("input",{type:"text",name:"searchQuery",id:"searchQuery",className:f,placeholder:"Search for movies..."})}),(0,l.jsx)("button",{type:"submit",className:p,children:"Search"})]})},d=function(){var e=(0,o.useState)(null),r=(0,a.Z)(e,2),t=r[0],i=r[1],h=(0,v.lr)(),f=(0,a.Z)(h,1)[0].get("query")||"";return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,s.LI)(f);case 5:r=e.sent,i(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching movies:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,l.jsxs)("div",{className:m["movies\u0421ontainer"],children:[(0,l.jsx)(_,{}),t&&(0,l.jsx)(u.Z,{movies:t})]})}},279:function(e,r,t){t.d(r,{Ad:function(){return m},LI:function(){return f},Sg:function(){return v},YE:function(){return u},mo:function(){return h}});var n=t(861),a=t(311),i=t.n(a),c=t(340),o="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGRiMmQ2NWFmZjlkYWQ2Nzg0ZWUxM2M2NjFiNDE4NyIsInN1YiI6IjY2Mzc4MmFhMzVkMWJjMDEyNjBhYTc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrLGzVlqtjUvX3omt7Uq6H7ifhWLUnT_jgp0DIQhbeY",s="https://api.themoviedb.org/3",u=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("".concat(s,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(o)}});case 2:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("".concat(s,"/movie/").concat(r),{headers:{Authorization:"Bearer ".concat(o)}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("".concat(s,"/movie/").concat(r,"/credits"),{headers:{Authorization:"Bearer ".concat(o)}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("".concat(s,"/movie/").concat(r,"/reviews"),{headers:{Authorization:"Bearer ".concat(o)}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("".concat(s,"/search/movie?query=").concat(r),{headers:{Authorization:"Bearer ".concat(o)}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=964.1d2ccfc4.chunk.js.map