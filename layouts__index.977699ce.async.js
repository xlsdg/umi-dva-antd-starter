(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"0XgM":function(t,r,e){t.exports={"ant-layout":"ant-layout","ant-layout-has-sider":"ant-layout-has-sider","ant-layout-content":"ant-layout-content","ant-layout-header":"ant-layout-header","ant-layout-footer":"ant-layout-footer","ant-layout-sider":"ant-layout-sider","ant-layout-sider-children":"ant-layout-sider-children","ant-layout-sider-has-trigger":"ant-layout-sider-has-trigger","ant-layout-sider-right":"ant-layout-sider-right","ant-layout-sider-trigger":"ant-layout-sider-trigger","ant-layout-sider-zero-width":"ant-layout-sider-zero-width","ant-layout-sider-zero-width-trigger":"ant-layout-sider-zero-width-trigger","ant-layout-sider-zero-width-trigger-right":"ant-layout-sider-zero-width-trigger-right","ant-layout-sider-light":"ant-layout-sider-light","ant-layout-rtl":"ant-layout-rtl"}},G81o:function(t,r,e){t.exports={container:"_1fhqOIL8"}},H0h1:function(t,r,e){var a=e("SKAX");function n(t,r){var e=!0;return a(t,(function(t,a,n){return e=!!r(t,a,n),e})),e}t.exports=n},Jlc5:function(t,r,e){var a=e("ZirO"),n=e("H0h1"),o=e("ut/Y"),i=e("Z0cm"),u=e("mv/X");function l(t,r,e){var l=i(t)?a:n;return e&&u(t,r,e)&&(r=void 0),l(t,o(r,3))}t.exports=l},ZirO:function(t,r){function e(t,r){var e=-1,a=null==t?0:t.length;while(++e<a)if(!r(t[e],e,t))return!1;return!0}t.exports=e},tCqT:function(t,r,e){"use strict";e.r(r);e("GNNt");var a=e("wEI+"),n=e("Xdxp"),o=e.n(n),i=e("+UJD"),u=e.n(i),l=e("q1tI"),c=e.n(l),s=e("7AqN"),d=(e("cIOH"),e("0XgM"),e("PKem")),y=e("ZX9x"),h=d["e"];h.Header=d["c"],h.Footer=d["b"],h.Content=d["a"],h.Sider=y["b"];var g=h,f=e("G81o"),v=e.n(f);function w(t){var r=t.children;return c.a.createElement(g,{className:v.a.container},c.a.createElement(g.Content,{className:v.a.content},r))}w.defaultProps={};var p=c.a.memo(w),m=(e("Jlc5"),e("yWgo"));function x(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m["i"];var a=c.a.useRef(void 0);a.current&&e(r,a.current)||(a.current=r),c.a.useEffect(t,a.current)}function b(t){var r=t.children,e=Object(s["k"])(),n=c.a.useRef(e);x((function(){Object(m["i"])(n.current,e)||(n.current=e,window.scrollTo(0,0))}),[e]);var i=r,l=e.pathname,d="/"!==l?u()(l,"/"):l;o()(d,"/user/")&&(i=c.a.createElement(p,null,r));var y={autoInsertSpaceInButton:!1};return c.a.createElement(a["a"],y,i)}b.defaultProps={};r["default"]=c.a.memo(b)}}]);