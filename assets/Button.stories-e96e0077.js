import{j as k}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function c({children:i,size:s="md",variant:o="primary"}){return k.jsx("button",{className:`rounded-md text-sm 
      ${s==="sm"&&"px-2.5 py-1"}
      ${s==="md"&&"px-4 py-2"} 
      ${s==="lg"&&"px-5 py-3"}  
      ${o==="primary"&&"bg-blue text-white"}
      ${o==="secondary"&&"bg-grey text-graphite"}
      ${o==="link"&&"bg-tag-blue text-blue"}
      `,children:i})}try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"link"'}]}}}}}catch{}const j={title:"widgets/Button",component:c,argTypes:{size:{options:["sm","md","lg"],control:{type:"radio"}},variant:{options:["primary","secondary","link"],control:{type:"select"}}}},e={args:{children:"Button"}},r={args:{children:"Button",size:"sm"}},a={args:{children:"Button",size:"lg"}},t={args:{children:"Button",variant:"secondary"}},n={args:{children:"Button",variant:"link"}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Button",
    size: "sm"
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,v,B;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Button",
    size: "lg"
  }
}`,...(B=(v=a.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var h,x,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "secondary"
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var _,S,b;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "link"
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const N=["Default","Small","Large","Secondary","Link"];export{e as Default,a as Large,n as Link,t as Secondary,r as Small,N as __namedExportsOrder,j as default};
//# sourceMappingURL=Button.stories-e96e0077.js.map
