import{a as r,o as t,b as c,e as B,c as g,w as p,r as m,f as y,h as V,i as f,j as _,k as A,l as D,m as v,p as a,t as d,q as w,v as b,s as E,x as T,y as U,z}from"./entry.5a55eb4a.js";import{u as M,a as j}from"./useAuth.8acaa969.js";const q=r({__name:"NIcon",props:{icon:null},setup(e){return(n,s)=>(t(),c("div",{class:B(["n-icon",e.icon])},null,2))}}),O=r({__name:"NButton",props:{to:null,icon:null},setup(e){return(n,s)=>{const l=q;return t(),g(V(e.to?"a":"button"),{href:e.to,class:"n-button n-transition n-button-base hover:n-button-hover active:n-button-active focus-visible:n-focus-base n-disabled:n-disabled"},{default:p(()=>[m(n.$slots,"icon",{},()=>[e.icon?(t(),g(l,{key:0,icon:e.icon,class:"n-button-icon"},null,8,["icon"])):y("",!0)]),m(n.$slots,"default")]),_:3},8,["href"])}}}),P={},R={class:"n-card n-card-base"};function F(e,n){return t(),c("div",R,[m(e.$slots,"default")])}const G=f(P,[["render",F]]),H=e=>(U("data-v-0c8818ef"),e=e(),z(),e),J={key:0},K={class:"input-container"},L={key:0,class:"error"},Q={key:1},W=H(()=>a("h3",null,"Check your mail for confirmation message",-1)),X=[W],Y=r({__name:"Card",setup(e){const n=_("login"),s=_(""),l=_(!1),o=A({password:"",email:""});D();const{signUp:x,signIn:C,signOut:oe,user:k}=M(),S=()=>{n.value==="login"?n.value="singup":n.value="login",s.value=""},N=async()=>{try{n.value=="login"?(await C({email:o.email,password:o.password}),T("/profile"),console.log("loggedin user::",k)):(await x({email:o.email,password:o.password}),l.value=!0),o.email="",o.password=""}catch(h){s.value=h.message}};return(h,i)=>{const $=O,I=G;return t(),c("div",null,[v(I,{class:"card"},{default:p(()=>[l.value?(t(),c("div",Q,X)):(t(),c("div",J,[a("h3",null,d(n.value),1),a("div",K,[w(a("input",{"onUpdate:modelValue":i[0]||(i[0]=u=>o.email=u),placeholder:"Email"},null,512),[[b,o.email]]),w(a("input",{"onUpdate:modelValue":i[1]||(i[1]=u=>o.password=u),placeholder:"Password",type:"password"},null,512),[[b,o.password]])]),v($,{onClick:N},{default:p(()=>[E("Submit")]),_:1}),s.value?(t(),c("p",L,d(s.value),1)):y("",!0),a("p",{onClick:S},d(n.value==="login"?"Dont have an account? Create one now!":"Already have an account ? go ahead and login!"),1)]))]),_:1})])}}});const Z=f(Y,[["__scopeId","data-v-0c8818ef"]]),ee={class:"container"},ne=r({__name:"index",setup(e){return j(),(n,s)=>{const l=Z;return t(),c("div",null,[a("div",ee,[v(l)])])}}});const ae=f(ne,[["__scopeId","data-v-0a115f30"]]);export{ae as default};