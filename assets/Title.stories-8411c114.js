import{j as _}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function o({children:n,size:s="h1",variant:x="regular"}){return _.jsx("p",{className:`${x==="bold"&&"font-bold"}
      ${s==="h1"&&"text-2xl"}
      ${s==="h2"&&"text-3xl"}
      ${s==="h3"&&"text-4xl"}
      `,children:n})}try{o.displayName="Title",o.__docgenInfo={description:"",displayName:"Title",props:{size:{defaultValue:{value:"h1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},variant:{defaultValue:{value:"regular"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"bold"'}]}}}}}catch{}const H={title:"widgets/Title",component:o,argTypes:{size:{options:["h1","h2","h3"],control:{type:"radio"}},variant:{options:["regular","bold"],control:{type:"select"}}}},e={args:{children:"Title"}},r={args:{children:"Title",variant:"bold"}},a={args:{children:"Title",size:"h2"}},t={args:{children:"Title",size:"h3"}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Title"
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Title",
    variant: "bold"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Title",
    size: "h2"
  }
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,T,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Title",
    size: "h3"
  }
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const S=["Default","Bold","H2","H3"];export{r as Bold,e as Default,a as H2,t as H3,S as __namedExportsOrder,H as default};
//# sourceMappingURL=Title.stories-8411c114.js.map
