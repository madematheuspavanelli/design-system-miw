import{j as q}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function t({placeholder:s="Placeholder",disabled:n,variant:v,searchable:x,error:_}){return q.jsx("input",{placeholder:s,disabled:n,className:`relative rounded-[3px] border-2 border-solid border-grey px-2 py-2.5 pr-6 text-sm outline-none
        focus:border-blue disabled:cursor-not-allowed
        ${v==="compact"&&"py-1.5"}
        ${_&&"border-priority-red"}
        ${n&&"border-grey"}
        ${x&&"bg-[url(/search.svg)] bg-[9.75rem] bg-no-repeat"}
        `})}try{t.displayName="Input",t.__docgenInfo={description:"",displayName:"Input",props:{placeholder:{defaultValue:{value:"Placeholder"},description:"",name:"placeholder",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"compact"'}]}},searchable:{defaultValue:null,description:"",name:"searchable",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Widgets/Input",component:t,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input"},variant:{options:["regular","compact"],control:{type:"radio"},description:"Choose between regular and compact variants"},searchable:{control:"boolean",description:"Enable/disable search functionality"},disabled:{control:"boolean",description:"Disable the input"},error:{control:"boolean"}}},e={args:{}},r={args:{disabled:!0}},a={args:{error:!0}},o={args:{variant:"compact"}};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,i,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,b,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "compact"
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const S=["Default","Disabled","Error","Compact"];export{o as Compact,e as Default,r as Disabled,a as Error,S as __namedExportsOrder,V as default};
//# sourceMappingURL=Input.stories-c7562de0.js.map
