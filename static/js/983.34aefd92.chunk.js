"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{155:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(689),s=n(87),i={moviesList:"MoviesList_moviesList__P6SP5",moviesListItem:"MoviesList_moviesListItem__OFqms",movieImg:"MoviesList_movieImg__bm-8+",movieTitleLink:"MoviesList_movieTitleLink__Kcovo",movieTitle:"MoviesList_movieTitle__CxO8p"},a=n(184),c=function(e){var t=e.movies,n=(0,r.TH)();return(0,a.jsx)("div",{className:i.container,children:(0,a.jsx)("ul",{className:i.moviesList,children:t.map((function(e){var t=e.id,r=e.title,c=e.name,o=e.original_title,u=e.poster_path;return(0,a.jsx)("li",{className:i.moviesListItem,children:(0,a.jsxs)(s.rU,{state:{from:n},to:"/movies/".concat(t),className:i.movieTitleLink,children:[(0,a.jsx)("img",{className:i.movieImg,src:u?"https://image.tmdb.org/t/p/w300/".concat(u):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x250",alt:r||c||o}),(0,a.jsx)("h2",{className:i.movieTitle,children:r||c||o})]},t)},t)}))})})}},978:function(e,t,n){n.d(t,{u:function(){return v},Q:function(){return u}});var r=n(861),s=n(439),i=n(757),a=n.n(i),c=n(791),o=n(933),u=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),n=t[0],i=t[1],u=(0,c.useState)(!1),l=(0,s.Z)(u,2),v=l[0],_=l[1],m=(0,c.useState)(null),f=(0,s.Z)(m,2),p=f[0],d=f[1];return(0,c.useEffect)((function(){_(!0);var e=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.rj)();case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d(e.t0);case 10:return e.prev=10,_(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{movies:n,isLoading:v,error:p}},l=n(87),v=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),n=t[0],i=t[1],u=(0,c.useState)(!1),v=(0,s.Z)(u,2),_=v[0],m=v[1],f=(0,c.useState)(null),p=(0,s.Z)(f,2),d=p[0],g=p[1],h=(0,l.lr)(),y=(0,s.Z)(h,2),L=y[0],w=y[1],x=L.get("q");(0,c.useEffect)((function(){if(x){m(!0);var e=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Wf)(x);case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g(e.t0);case 10:return e.prev=10,m(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);return{movies:n,isLoading:_,error:d,onHandleSubmit:function(e){w({q:e})}}}},983:function(e,t,n){n.r(t);var r=n(155),s=n(978),i=n(139),a=n(971),c=n(184);t.default=function(){var e=(0,s.Q)(),t=e.movies,n=e.isLoading,o=e.error;return(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)("div",{className:a.Z.loaderContainer,children:(0,c.jsx)(i.Z,{})}),o&&(0,c.jsx)("p",{children:"Something went wrong"}),!1===n&&t.length>0&&(0,c.jsx)(r.Z,{movies:t})]})}},933:function(e,t,n){n.d(t,{IQ:function(){return v},Jh:function(){return _},TP:function(){return l},Wf:function(){return u},rj:function(){return o}});var r=n(861),s=n(757),i=n.n(s),a=n(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="af62c948c73d11660c8d6ea2e76a9d91",o=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/trending/movie/day?api_key=".concat(c,"&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},971:function(e,t){t.Z={loaderContainer:"styles_loaderContainer__DdK63",movieDetailsStyleContainer:"styles_movieDetailsStyleContainer__Em1FU",movieDetailsStyle:"styles_movieDetailsStyle__mYu7y",containerMoviesDetails:"styles_containerMoviesDetails__nRDdW",containerContent:"styles_containerContent__BE7pb",movieDetailsDescr:"styles_movieDetailsDescr__6GiPV",movieDetailsTitle:"styles_movieDetailsTitle__lAq5g",movieDetailsImg:"styles_movieDetailsImg__NpjLu",containerCastReviewsList:"styles_containerCastReviewsList__navW7",castReviewsList:"styles_castReviewsList__EUhsR",castLink:"styles_castLink__MVXqb",castTitle:"styles_castTitle__6CSdl",castList:"styles_castList__QBa5v",castListItem:"styles_castListItem__nvnyn",castImg:"styles_castImg__52BF+",reviewsTitle:"styles_reviewsTitle__ngsfc",reviewsList:"styles_reviewsList__LHsG9",reviewsListItem:"styles_reviewsListItem__bes5Y"}}}]);
//# sourceMappingURL=983.34aefd92.chunk.js.map