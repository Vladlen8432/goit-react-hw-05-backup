"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{602:function(e,t,s){s.r(t);var n=s(861),a=s(439),r=s(757),i=s.n(r),c=s(791),o=s(689),l=s(87),u=s(933),v=s(971),m=s(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)(null),s=(0,a.Z)(t,2),r=s[0],_=s[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.TP)(e);case 3:s=t.sent,_(s),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),r?(0,m.jsx)("div",{className:v.Z.movieDetailsStyleContainer,children:r?(0,m.jsxs)("div",{className:v.Z.movieDetailsStyle,children:[(0,m.jsx)("h2",{className:v.Z.movieDetailsTitle,children:r.title}),(0,m.jsxs)("div",{className:v.Z.containerMoviesDetails,children:[(0,m.jsx)("div",{className:v.Z.containerImg,children:(0,m.jsx)("img",{className:v.Z.movieDetailsImg,src:"https://image.tmdb.org/t/p/w300".concat(r.poster_path),alt:r.title})}),(0,m.jsxs)("div",{className:v.Z.containerContent,children:[(0,m.jsx)("p",{className:v.Z.movieDetailsDescr,children:r.overview}),(0,m.jsxs)("p",{className:v.Z.movieDetailsDescr,children:["Release Date: ",r.release_date]}),(0,m.jsxs)("p",{className:v.Z.movieDetailsDescr,children:["Vote Average: ",r.vote_average]}),(0,m.jsxs)("p",{className:v.Z.movieDetailsDescr,children:["Runtime: ",r.runtime," minutes"]})]})]}),(0,m.jsx)("div",{className:v.Z.containerCastReviewsList,children:(0,m.jsxs)("ul",{className:v.Z.castReviewsList,children:[(0,m.jsx)("li",{className:v.Z.castReviewsListItem,children:(0,m.jsx)(l.rU,{className:v.Z.castLink,to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,m.jsx)("li",{className:v.Z.castReviewsListItem,children:(0,m.jsx)(l.rU,{className:v.Z.castLink,to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})}),(0,m.jsx)(o.j3,{})]}):(0,m.jsx)("p",{children:"Loading..."})}):(0,m.jsx)("div",{children:"Loading..."})}},933:function(e,t,s){s.d(t,{IQ:function(){return v},Jh:function(){return m},TP:function(){return u},Wf:function(){return l},rj:function(){return o}});var n=s(861),a=s(757),r=s.n(a),i=s(294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="af62c948c73d11660c8d6ea2e76a9d91",o=function(){var e=(0,n.Z)(r().mark((function e(){var t,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c,"&language=en-US"));case 2:return t=e.sent,s=t.data,e.abrupt("return",s.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(r().mark((function e(t){var s,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return s=e.sent,n=s.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(r().mark((function e(t){var s,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return s=e.sent,n=s.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(r().mark((function e(t){var s,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return s=e.sent,n=s.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(r().mark((function e(t){var s,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return s=e.sent,n=s.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},971:function(e,t){t.Z={loaderContainer:"styles_loaderContainer__DdK63",movieDetailsStyleContainer:"styles_movieDetailsStyleContainer__Em1FU",movieDetailsStyle:"styles_movieDetailsStyle__mYu7y",containerMoviesDetails:"styles_containerMoviesDetails__nRDdW",containerContent:"styles_containerContent__BE7pb",movieDetailsDescr:"styles_movieDetailsDescr__6GiPV",movieDetailsTitle:"styles_movieDetailsTitle__lAq5g",movieDetailsImg:"styles_movieDetailsImg__NpjLu",containerCastReviewsList:"styles_containerCastReviewsList__navW7",castReviewsList:"styles_castReviewsList__EUhsR",castLink:"styles_castLink__MVXqb",castTitle:"styles_castTitle__6CSdl",castList:"styles_castList__QBa5v",castListItem:"styles_castListItem__nvnyn",castImg:"styles_castImg__52BF+",reviewsTitle:"styles_reviewsTitle__ngsfc",reviewsList:"styles_reviewsList__LHsG9",reviewsListItem:"styles_reviewsListItem__bes5Y"}}}]);
//# sourceMappingURL=602.811b81ea.chunk.js.map