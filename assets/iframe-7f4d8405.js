import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const d="modulepreload",E=function(_,i){return new URL(_,i).href},O={},o=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=E(e,c),e in O)return;O[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":d,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r)return new Promise((l,u)=>{n.addEventListener("load",l),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,a=p({page:"preview"});f.setChannel(a);window.__STORYBOOK_ADDONS_CHANNEL__=a;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=a);const R={"./src/components/widgets/Title/Title.stories.tsx":async()=>o(()=>import("./Title.stories-8411c114.js"),["./Title.stories-8411c114.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js"],import.meta.url),"./src/components/widgets/Input/Input.stories.tsx":async()=>o(()=>import("./Input.stories-c7562de0.js"),["./Input.stories-c7562de0.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js"],import.meta.url),"./src/components/widgets/Button/Button.stories.tsx":async()=>o(()=>import("./Button.stories-e96e0077.js"),["./Button.stories-e96e0077.js","./jsx-runtime-ffb262ed.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js"],import.meta.url)};async function w(_){return R[_]()}const{composeConfigs:T,PreviewWeb:P,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([o(()=>import("./config-36d15c1d.js"),["./config-36d15c1d.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./_getPrototype-c468d7b4.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-67f7427a.js"),[],import.meta.url),o(()=>import("./preview-bed967c6.js"),[],import.meta.url),o(()=>import("./preview-108c1c3c.js"),["./preview-108c1c3c.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2059b184.js"),[],import.meta.url),o(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b3c37142.js"),[],import.meta.url),o(()=>import("./preview-6751e51d.js"),["./preview-6751e51d.js","./_commonjsHelpers-de833af9.js"],import.meta.url),o(()=>import("./preview-e0c5aa6c.js"),["./preview-e0c5aa6c.js","./preview-b3be5bb1.css"],import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new P;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:I});export{o as _};
//# sourceMappingURL=iframe-7f4d8405.js.map
