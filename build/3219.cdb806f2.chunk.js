"use strict";(self.webpackChunkbg_kala_school_web_app_backend=self.webpackChunkbg_kala_school_web_app_backend||[]).push([[3219],{76539:(k,m,e)=>{e.d(m,{Z:()=>g});var t=e(67294),p=e(97132),s=e(45697),a=e.n(s),o=e(95489),i=e(41363),r=e(28702),T=e(48474);const l=({onRegenerate:c,idToRegenerate:n,backUrl:d})=>{const{formatMessage:R}=(0,p.useIntl)(),[y,O]=(0,t.useState)(!1),{regenerateData:A,isLoadingConfirmation:C}=(0,T.rW)(d,n,c),v=async()=>{A(),O(!1)};return t.createElement(t.Fragment,null,t.createElement(r.Button,{startIcon:t.createElement(i.Refresh,null),type:"button",size:"S",variant:"tertiary",onClick:()=>O(!0),name:"regenerate"},R({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(o.ConfirmDialog,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(i.Refresh,null),isConfirmButtonLoading:C,isOpen:y,onToggleDialog:()=>O(!1),onConfirm:v,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};l.defaultProps={onRegenerate(){}},l.propTypes={onRegenerate:a().func,idToRegenerate:a().oneOfType([a().number,a().string]).isRequired,backUrl:a().string.isRequired};const M=l,u=({title:c,token:n,setToken:d,canEditInputs:R,canRegenerate:y,isSubmitting:O,backUrl:A,regenerateUrl:C})=>{const{formatMessage:v}=(0,p.useIntl)(),S=F=>{d({...n,accessKey:F})};return t.createElement(r.HeaderLayout,{title:n?.name||v(c),primaryAction:R?t.createElement(r.Stack,{horizontal:!0,spacing:2},y&&n?.id&&t.createElement(M,{backUrl:C,onRegenerate:S,idToRegenerate:n?.id}),t.createElement(r.Button,{disabled:O,loading:O,startIcon:t.createElement(i.Check,null),type:"submit",size:"S"},v({id:"global.save",defaultMessage:"Save"}))):y&&n?.id&&t.createElement(M,{onRegenerate:S,idToRegenerate:n?.id,backUrl:C}),navigationAction:t.createElement(o.Link,{startIcon:t.createElement(i.ArrowLeft,null),to:A},v({id:"global.back",defaultMessage:"Back"}))})};u.propTypes={token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().oneOfType([a().number,a().string]),name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string}),canEditInputs:a().bool.isRequired,canRegenerate:a().bool.isRequired,setToken:a().func.isRequired,isSubmitting:a().bool.isRequired,backUrl:a().string.isRequired,title:a().shape({id:a().string,label:a().string}).isRequired,regenerateUrl:a().string.isRequired},u.defaultProps={token:void 0};const g=u},60401:(k,m,e)=>{e.d(m,{Z:()=>l});var t=e(67294),p=e(45697),s=e.n(p),a=e(97132),o=e(28702),i=e.n(o),r=e(75056);const T=({token:M,errors:u,values:g,onChange:c,isCreating:n})=>{const{formatMessage:d}=(0,a.useIntl)();return t.createElement(t.Fragment,null,t.createElement(o.Select,{name:"lifespan",label:d({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:g.lifespan!==null?g.lifespan:"0",error:u.lifespan?d(u.lifespan?.id?u.lifespan:{id:u.lifespan,defaultMessage:u.lifespan}):null,onChange:R=>{c({target:{name:"lifespan",value:R}})},required:!0,disabled:!n,placeholder:"Select"},t.createElement(o.Option,{value:"604800000"},d({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(o.Option,{value:"2592000000"},d({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(o.Option,{value:"7776000000"},d({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(o.Option,{value:"0"},d({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Typography,{variant:"pi",textColor:"neutral600"},!n&&`${d({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,r.IX)(M?.createdAt,parseInt(g.lifespan,10))}`))};T.propTypes={errors:s().shape({lifespan:s().string}),onChange:s().func.isRequired,values:s().shape({lifespan:s().oneOfType([s().number,s().string])}).isRequired,isCreating:s().bool.isRequired,token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string})},T.defaultProps={errors:{},token:{}};const l=T},24122:(k,m,e)=>{e.d(m,{Z:()=>n});var t=e(67294),p=e(97132),s=e(95489),a=e.n(s),o=e(28702),i=e.n(o),r=e(41363),T=e.n(r),l=e(45697),M=e.n(l),u=e(74855),g=e.n(u);const c=({token:d,tokenType:R})=>{const{formatMessage:y}=(0,p.useIntl)(),O=(0,s.useNotification)(),{trackUsage:A}=(0,s.useTracking)(),C=(0,t.useRef)(A);return t.createElement(s.ContentBox,{endAction:d&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(u.CopyToClipboard,{onCopy:()=>{C.current("didCopyTokenKey",{tokenType:R}),O({type:"success",message:{id:"Settings.tokens.notification.copied"}})},text:d},t.createElement(o.IconButton,{label:y({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:t.createElement(r.Duplicate,null),style:{padding:0,height:"1rem"}}))),title:d||y({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:y(d?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(r.Key,null),iconBackground:"neutral100"})};c.defaultProps={token:null},c.propTypes={token:M().string,tokenType:M().string.isRequired};const n=c},40695:(k,m,e)=>{e.d(m,{Z:()=>T});var t=e(67294),p=e(45697),s=e.n(p),a=e(97132),o=e(28702),i=e.n(o);const r=({errors:l,values:M,onChange:u,canEditInputs:g})=>{const{formatMessage:c}=(0,a.useIntl)();return t.createElement(o.Textarea,{label:c({id:"Settings.tokens.form.description",defaultMessage:"Description"}),name:"description",error:l.description?c(l.description?.id?l.description:{id:l.description,defaultMessage:l.description}):null,onChange:u,disabled:!g},M.description)};r.propTypes={errors:s().shape({description:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({description:s().string}).isRequired},r.defaultProps={errors:{}};const T=r},61053:(k,m,e)=>{e.d(m,{Z:()=>T});var t=e(67294),p=e(45697),s=e.n(p),a=e(97132),o=e(28702),i=e.n(o);const r=({errors:l,values:M,onChange:u,canEditInputs:g})=>{const{formatMessage:c}=(0,a.useIntl)();return t.createElement(o.TextInput,{name:"name",error:l.name?c(l.name?.id?l.name:{id:l.name,defaultMessage:l.name}):null,label:c({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:u,value:M.name,disabled:!g,required:!0})};r.propTypes={errors:s().shape({name:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string}).isRequired},r.defaultProps={errors:{}};const T=r},47670:(k,m,e)=>{e.d(m,{Z:()=>t,f:()=>p});const t="api-token",p="transfer-token"},75056:(k,m,e)=>{e.d(m,{IX:()=>a,fK:()=>T,mk:()=>u});var t=e(47292),p=e(73825);const a=(g,c,n="en")=>{if(c&&typeof c=="number"){const d=c/24/60/60/1e3;return(0,t.format)((0,t.addDays)(new Date(g),d),"PPP",{locale:p[n]})}return"Unlimited"};var o=e(53209),i=e(95489);const T=o.Ry().shape({name:o.Z_(i.translatedErrors.string).required(i.translatedErrors.required),type:o.Z_(i.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(i.translatedErrors.required),description:o.Z_().nullable(),lifespan:o.Rx().integer().min(0).nullable().defined(i.translatedErrors.required)});var l=e(96486);const u=g=>{const c={allActionsIds:[],permissions:[]};return c.permissions=Object.keys(g).map(n=>({apiId:n,label:n.split("::")[1],controllers:(0,l.flatten)(Object.keys(g[n].controllers).map(d=>({controller:d,actions:(0,l.flatten)(g[n].controllers[d].map(R=>{const y=`${n}.${d}.${R}`;return n.includes("api::")&&c.allActionsIds.push(y),{action:R,actionId:y}}))})))})),c}},53219:(k,m,e)=>{e.d(m,{Z:()=>z});var t=e(67294),p=e(97132),s=e(80831),a=e(49656),o=e(23724),i=e(95489),r=e(28702),T=e(38683),l=e(53209);const u=l.Ry().shape({name:l.Z_(i.translatedErrors.string).required(i.translatedErrors.required),description:l.Z_().nullable(),lifespan:l.Rx().integer().min(0).nullable().defined(i.translatedErrors.required)});var g=e(41363),c=e(45697),n=e.n(c);const d=({transferTokenName:_})=>{const{formatMessage:h}=(0,p.useIntl)();return(0,i.useFocusWhenNavigate)(),t.createElement(r.Main,{"aria-busy":"true"},t.createElement(i.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(r.HeaderLayout,{primaryAction:t.createElement(r.Button,{disabled:!0,startIcon:t.createElement(g.Check,null),type:"button",size:"L"},h({id:"global.save",defaultMessage:"Save"})),title:_||h({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(r.ContentLayout,null,t.createElement(i.LoadingIndicatorPage,null)))};d.defaultProps={transferTokenName:null},d.propTypes={transferTokenName:n().string};const R=d;var y=e(87751),O=e(60401),A=e(61053),C=e(40695);const v=({errors:_,onChange:h,canEditInputs:L,isCreating:B,values:I,transferToken:f})=>{const{formatMessage:U}=(0,p.useIntl)();return t.createElement(r.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(r.Stack,{spacing:4},t.createElement(r.Typography,{variant:"delta",as:"h2"},U({id:"global.details",defaultMessage:"Details"})),t.createElement(r.Grid,{gap:5},t.createElement(r.GridItem,{key:"name",col:6,xs:12},t.createElement(A.Z,{errors:_,values:I,canEditInputs:L,onChange:h})),t.createElement(r.GridItem,{key:"description",col:6,xs:12},t.createElement(C.Z,{errors:_,values:I,canEditInputs:L,onChange:h})),t.createElement(r.GridItem,{key:"lifespan",col:6,xs:12},t.createElement(O.Z,{isCreating:B,errors:_,values:I,onChange:h,token:f})))))};v.propTypes={errors:n().shape({name:n().string,description:n().string,lifespan:n().string,type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string,description:n().string,lifespan:n().oneOfType([n().number,n().string]),type:n().string}).isRequired,isCreating:n().bool.isRequired,transferToken:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},v.defaultProps={errors:{},transferToken:{}};const S=v;var F=e(24122),V=e(76539),W=e(47670);const $="Name already taken",z=()=>{(0,i.useFocusWhenNavigate)();const{formatMessage:_}=(0,p.useIntl)(),{lockApp:h,unlockApp:L}=(0,i.useOverlayBlocker)(),B=(0,i.useNotification)(),I=(0,a.useHistory)(),[f,U]=(0,t.useState)(I.location.state?.transferToken.accessKey?{...I.location.state.transferToken}:null),{trackUsage:G}=(0,i.useTracking)(),N=(0,t.useRef)(G),{setCurrentStep:H}=(0,i.useGuidedTour)(),{allowedActions:{canCreate:X,canUpdate:j,canRegenerate:Y}}=(0,i.useRBAC)(y.Z.settings["transfer-tokens"]),{params:{id:x}}=(0,a.useRouteMatch)("/settings/transfer-tokens/:id"),{get:Q,post:J,put:w}=(0,i.useFetchClient)(),P=x==="create";(0,t.useEffect)(()=>{N.current(P?"didAddTokenFromList":"didEditTokenFromList",{tokenType:W.f})},[P]);const{status:q}=(0,o.useQuery)(["transfer-token",x],async()=>{const{data:{data:E}}=await Q(`/admin/transfer/tokens/${x}`);return U({...E}),E},{enabled:!P&&!f,onError(){B({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ee=async(E,K)=>{N.current(P?"willCreateToken":"willEditToken",{tokenType:W.f}),h();const Z=E.lifespan&&parseInt(E.lifespan,10)&&E.lifespan!=="0"?parseInt(E.lifespan,10):null;try{const{data:{data:D}}=P?await J("/admin/transfer/tokens",{...E,lifespan:Z,permissions:["push"]}):await w(`/admin/transfer/tokens/${x}`,{name:E.name,description:E.description,type:E.type,permissions:["push"]});L(),P&&(I.replace(`/settings/transfer-tokens/${D.id}`,{transferToken:D}),H("transferTokens.success")),U({...D}),B({type:"success",message:_(P?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),N.current(P?"didCreateToken":"didEditToken",{type:f?.type,tokenType:W.f})}catch(D){const te=(0,T.Iz)(D.response.data);K.setErrors(te),D?.response?.data?.error?.message===$?B({type:"warning",message:D.response.data.message||"notification.error.tokennamenotunique"}):B({type:"warning",message:D?.response?.data?.message||"notification.error"}),L()}},b=j&&!P||X&&P;return!P&&!f&&q!=="success"?t.createElement(R,{transferTokenName:f?.name}):t.createElement(r.Main,null,t.createElement(i.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(s.Formik,{validationSchema:u,validateOnChange:!1,initialValues:{name:f?.name||"",description:f?.description||"",lifespan:f?.lifespan?f.lifespan.toString():f?.lifespan},enableReinitialize:!0,onSubmit:(E,K)=>ee(E,K)},({errors:E,handleChange:K,isSubmitting:Z,values:D})=>t.createElement(i.Form,null,t.createElement(V.Z,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:f,setToken:U,canEditInputs:b,canRegenerate:Y,isSubmitting:Z,regenerateUrl:"/admin/transfer/tokens/"}),t.createElement(r.ContentLayout,null,t.createElement(r.Stack,{spacing:6},Boolean(f?.name)&&t.createElement(F.Z,{token:f?.accessKey,tokenType:W.f}),t.createElement(S,{errors:E,onChange:K,canEditInputs:b,isCreating:P,values:D,transferToken:f}))))))}}}]);
