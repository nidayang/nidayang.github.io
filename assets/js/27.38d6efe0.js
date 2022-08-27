(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{348:function(e,r,t){"use strict";t.r(r);var v=t(6),l=Object(v.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"浅谈springmvc实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浅谈springmvc实现原理"}},[e._v("#")]),e._v(" 浅谈SpringMVC实现原理")]),e._v(" "),r("h2",{attrs:{id:"核心类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#核心类"}},[e._v("#")]),e._v(" 核心类")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("DispatcherServlet：前端控制器、分发控制器，请求的入口。")])]),e._v(" "),r("li",[r("p",[e._v("HandlerMapping：处理器映射器，找Handler。")])]),e._v(" "),r("li",[r("p",[e._v("Handler：处理器，就是controller中写的方法。")])]),e._v(" "),r("li",[r("p",[e._v("HandlerAdapter：处理器适配器，不需要工程师开发，由框架提供，通过HandlerAdapter对处理器（控制器方法）进行执行，不同的"),r("code",[e._v("controller")]),e._v("需要不同的"),r("code",[e._v("HandlerAdapter")]),e._v(",这边利用了"),r("strong",[e._v("适配器模式")]),e._v("。")])]),e._v(" "),r("li",[r("p",[e._v("ViewResolver：视图解析器")])]),e._v(" "),r("li",[r("p",[e._v("View: 视图")])])]),e._v(" "),r("h2",{attrs:{id:"以前写请求处理的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#以前写请求处理的问题"}},[e._v("#")]),e._v(" 以前写请求处理的问题")]),e._v(" "),r("p",[e._v("原先写"),r("code",[e._v("Servlet")]),e._v("的时候，继承"),r("code",[e._v("HttpServlet")]),e._v("，写一个自己的"),r("code",[e._v("servlet")]),e._v(",然后再"),r("code",[e._v("doGet")]),e._v("(),"),r("code",[e._v("doPost")]),e._v("()方法中写具体的业务逻辑，这样做的缺点：")]),e._v(" "),r("ul",[r("li",[e._v("一个请求一个"),r("code",[e._v("Servlet")]),e._v("，"),r("code",[e._v("Servlet")]),e._v("越来越多")]),e._v(" "),r("li",[e._v("web.xml中写的"),r("code",[e._v("servletMapping")]),e._v("越来越多，不好管理而且臃肿")])]),e._v(" "),r("p",[e._v("总之，代码"),r("strong",[e._v("越写越乱")]),e._v("，"),r("strong",[e._v("越写越多")]),e._v("，还"),r("strong",[e._v("不好管理")]),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"springmvc对原先的优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#springmvc对原先的优化"}},[e._v("#")]),e._v(" SpringMVC对原先的优化")]),e._v(" "),r("ol",[r("li",[e._v("将原先的一个"),r("code",[e._v("Servlet")]),e._v("封装成了"),r("code",[e._v("Handler")]),e._v(",一个"),r("code",[e._v("Controller")]),e._v("中有多个"),r("code",[e._v("Handler")]),e._v("，模块分层更加清晰了，自己模块的请求都放在了一起。")]),e._v(" "),r("li",[e._v("把原先Web.xml的映射利用"),r("code",[e._v("HandlerMapper")]),e._v("来处理，不需要在手动编写映射，解放了双手，解放了web.xml，再也不用写那臃肿的servlet映射😑。")]),e._v(" "),r("li",[e._v("不同的controller有不同的adapter来处理")])]),e._v(" "),r("h2",{attrs:{id:"执行流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[e._v("#")]),e._v(" 执行流程")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://c.biancheng.net/spring_mvc/process.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("执行流程转载于这个网站"),r("OutboundLink")],1)]),e._v(" "),r("ol",[r("li",[e._v("用户点击某个请求路径，发起一个 HTTP request 请求，该请求会被提交到 DispatcherServlet（前端控制器）；")]),e._v(" "),r("li",[e._v("由 DispatcherServlet 请求一个或多个 HandlerMapping（处理器映射器），并返回一个执行链（HandlerExecutionChain）。")]),e._v(" "),r("li",[e._v("DispatcherServlet 将执行链返回的 Handler 信息发送给 HandlerAdapter（处理器适配器）；")]),e._v(" "),r("li",[e._v("HandlerAdapter 根据 Handler 信息找到并执行相应的 Handler（常称为 Controller）；")]),e._v(" "),r("li",[e._v("Handler 执行完毕后会返回给 HandlerAdapter 一个 ModelAndView 对象（Spring MVC的底层对象，包括 Model 数据模型和 View 视图信息）；")]),e._v(" "),r("li",[e._v("HandlerAdapter 接收到 ModelAndView 对象后，将其返回给 DispatcherServlet ；")]),e._v(" "),r("li",[e._v("DispatcherServlet 接收到 ModelAndView 对象后，会请求 ViewResolver（视图解析器）对视图进行解析；")]),e._v(" "),r("li",[e._v("ViewResolver 根据 View 信息匹配到相应的视图结果，并返回给 DispatcherServlet；")]),e._v(" "),r("li",[e._v("DispatcherServlet 接收到具体的 View 视图后，进行视图渲染，将 Model 中的模型数据填充到 View 视图中的 request 域，生成最终的 View（视图）；")]),e._v(" "),r("li",[e._v("视图负责将结果显示到浏览器（客户端）。")])]),e._v(" "),r("blockquote",[r("p",[e._v("参考")])]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/blueboz/article/details/81840593",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/blueboz/article/details/81840593"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/DangerousMc/article/details/105118901",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/DangerousMc/article/details/105118901"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/DangerousMc/article/details/105118901",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.csdn.net/DangerousMc/article/details/105118901"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"http://www.51gjie.com/javaweb/846.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.51gjie.com/javaweb/846.html"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=l.exports}}]);