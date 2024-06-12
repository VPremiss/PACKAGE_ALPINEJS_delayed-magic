function n(t){t.magic("delay",d=>(i,l=null)=>{let a=0,r=l!==null,e=d;for(;e;){let u=e.getAttribute("x-delay");u&&(a+=parseInt(u),r=!0),e=e.parentElement}if(l!==null&&(a+=l),!r)throw"No delay specified and no parent x-delay attribute was found.";setTimeout(i,a)})}function y(t){t.plugin(n)}export{y as default};
//# sourceMappingURL=alpine-delayed-magic.js.map
