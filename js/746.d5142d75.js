"use strict";(self["webpackChunkpetsfamily_vue"]=self["webpackChunkpetsfamily_vue"]||[]).push([[746],{9746:function(t,s,e){e.r(s),e.d(s,{default:function(){return B}});var l=e(6252),d=e(3577);const r={class:"container mt-9 mb-lg-8 mb-6"},a={key:0,class:"fs-1 fs-md-6 text-center mb-4 mb-md-4"},i={key:1,class:"fs-1 fs-md-6 text-center mb-4 mb-md-4"},n={class:"row"},o={class:"col-12 col-md-6 col-lg-6"},u=(0,l._)("p",{class:"fs-4 fs-md-6"},"訂單明細",-1),c={class:"table table-striped align-middle"},_=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"text-start"},"商品照片"),(0,l._)("th",{class:"text-start"},"商品名稱"),(0,l._)("th",{class:"text-center"},"數量"),(0,l._)("th",{class:"text-center"},"單項金額")])],-1),p={class:"text-start"},h={class:"text-start"},m={class:"text-center"},g={class:"text-center"},y={colspan:"4",class:"text-end py-5 pe-5"},w={class:"col-12 col-md-6 col-lg-6"},b=(0,l._)("p",{class:"fs-4 fs-md-6"},"訂單資訊",-1),f={class:"table table-striped align-middle"},v=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{class:"text-start"})])],-1),x=(0,l._)("td",null,"訂單狀態",-1),k={key:0,class:"text-danger"},z={key:1},$=(0,l._)("td",null,"訂單總額",-1),D=(0,l._)("td",null,"訂單編號",-1),I=(0,l._)("td",null,"收件人姓名",-1),L=(0,l._)("td",null,"收件人信箱",-1),P=(0,l._)("td",null,"收件人信箱",-1),T=(0,l._)("td",null,"收件人地址",-1),j=(0,l._)("td",null,"備註",-1),C={key:0},W={key:1,class:"row"},O=(0,l._)("div",{class:"col-4"},[(0,l._)("p",{class:"fs-4 fs-md-6 text-center"},"付款方式")],-1),H={class:"col-4"},Y={class:"col-4"};function Z(t,s,e,Z,q,K){const U=(0,l.up)("dog-side-icon"),A=(0,l.up)("loading");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(A,{active:q.isLoading,class:"fs-1 text-secondary"},{default:(0,l.w5)((()=>[(0,l.Wm)(U),(0,l.Wm)(U),(0,l.Wm)(U)])),_:1},8,["active"]),(0,l._)("div",r,[(0,l._)("div",null,[q.order.is_paid?((0,l.wg)(),(0,l.iD)("p",a,"訂單結帳完成頁面")):((0,l.wg)(),(0,l.iD)("p",i,"結帳頁面"))]),(0,l._)("div",n,[(0,l._)("div",o,[u,(0,l._)("table",c,[_,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(q.products,(s=>((0,l.wg)(),(0,l.iD)("tr",{key:s.id},[(0,l._)("td",p,[(0,l._)("div",{class:"rounded rounded-3",style:(0,d.j5)([{height:"100px",width:"100px","background-position":"center center","background-size":"cover"},{backgroundImage:`url(${s.product.imageUrl})`}])},null,4)]),(0,l._)("td",h,(0,d.zw)(s.product.title),1),(0,l._)("td",m,(0,d.zw)(s.qty),1),(0,l._)("td",g,(0,d.zw)(t.$filters.toThousands(s.product.price))+"元 ",1)])))),128))]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[(0,l._)("td",y," 總計 "+(0,d.zw)(t.$filters.toThousands(q.order.total))+" 元 ",1)])])])]),(0,l._)("div",w,[b,(0,l._)("table",f,[v,(0,l._)("tbody",null,[(0,l._)("tr",null,[x,q.order.is_paid?((0,l.wg)(),(0,l.iD)("td",k,"已付款")):((0,l.wg)(),(0,l.iD)("td",z,"未付款"))]),(0,l._)("tr",null,[$,(0,l._)("td",null,(0,d.zw)(t.$filters.toThousands(q.order.total))+"元",1)]),(0,l._)("tr",null,[D,(0,l._)("td",null,(0,d.zw)(q.order.id),1)]),(0,l._)("tr",null,[I,(0,l._)("td",null,(0,d.zw)(q.user.name),1)]),(0,l._)("tr",null,[L,(0,l._)("td",null,(0,d.zw)(q.user.email),1)]),(0,l._)("tr",null,[P,(0,l._)("td",null,(0,d.zw)(q.user.tel),1)]),(0,l._)("tr",null,[T,(0,l._)("td",null,(0,d.zw)(q.user.address),1)]),(0,l._)("tr",null,[j,(0,l._)("td",null,(0,d.zw)(q.order.message),1)])])]),(0,l._)("div",null,[q.order.is_paid?((0,l.wg)(),(0,l.iD)("div",C)):((0,l.wg)(),(0,l.iD)("div",W,[O,(0,l._)("div",H,[(0,l._)("button",{onClick:s[0]||(s[0]=(...t)=>K.postPay&&K.postPay(...t)),type:"button",class:"btn btn-primary w-100"},"現金")]),(0,l._)("div",Y,[(0,l._)("button",{onClick:s[1]||(s[1]=(...t)=>K.postPay&&K.postPay(...t)),type:"button",class:"btn btn-secondary w-100"},"信用卡")])]))])])])])],64)}var q=e(4051),K={inject:["emitter"],data(){return{order:{},user:{},products:{},is_paid:!1,orderId:"",isLoading:!1}},methods:{getOrder(){this.orderId=this.$route.params.id;const t=`https://vue3-course-api.hexschool.io/v2/api/yusyuanjhou/order/${this.orderId}`;this.isLoading=!0,this.$http.get(t).then((t=>{setTimeout((()=>{this.isLoading=!1}),1e3),this.order=t.data.order,this.user=t.data.order.user,this.products=t.data.order.products}))},postPay(){this.orderId=this.$route.params.id;const t=`https://vue3-course-api.hexschool.io/v2/api/yusyuanjhou/pay/${this.orderId}`;this.isLoading=!0,this.$http.post(t).then((t=>{setTimeout((()=>{this.isLoading=!1}),1e3),this.getOrder(),q.Z.emit("get-cart"),t.data.success&&this.emitter.emit("push-message",{style:"primary",title:"結帳成功"})})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"結帳失敗"})}))}},mounted(){this.getOrder()}},U=e(3744);const A=(0,U.Z)(K,[["render",Z]]);var B=A}}]);
//# sourceMappingURL=746.d5142d75.js.map