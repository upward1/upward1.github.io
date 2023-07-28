(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{583:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("p",[s._v("查看java系统错误日志、gc日志都没有发现任何问题，服务器应用总是隔三岔五莫名其妙被停掉。。")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#问题排查"}},[s._v("问题排查")])]),a("li",[a("a",{attrs:{href:"#原因分析"}},[s._v("原因分析")])]),a("li",[a("a",{attrs:{href:"#解决方法"}},[s._v("解决方法")])])])]),a("p"),s._v(" "),a("p",[s._v("Linux内存使用量超过阈值，使得Java应用程序无可用内存，最终导致程序崩溃。即使在程序没有挂掉时把程序停掉，系统内存也不会被释放。")]),s._v(" "),a("h2",{attrs:{id:"问题排查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题排查"}},[s._v("#")]),s._v(" 问题排查")]),s._v(" "),a("p",[s._v("查看 Linux 的系统日志 /var/log/message 出现如下日志，说明 Linux 系统自身把 Java 进程杀掉了")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep 'Out of memory' messages*")]),s._v("\nDec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(":21:59 ecs-web kernel: Out of memory: Kill process "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17873")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" score "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(" or sacrifice child\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("当 Linux 系统内存不足时，系统会把当前系统占用系统内存过高的进程当做流氓进程，然后系统发出信号将这个流氓进程杀掉，最后导致 Java 应用服务不能使用")]),s._v(" "),a("h2",{attrs:{id:"原因分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因分析"}},[s._v("#")]),s._v(" 原因分析")]),s._v(" "),a("p",[s._v("Linux 内核有个机制叫OOM killer(Out Of Memory killer)，该机制会监控那些占用内存过大，尤其是瞬间占用内存很快的进程，然后防止内存耗尽而自动把该进程杀掉。")]),s._v(" "),a("p",[s._v("内核检测到系统内存不足、挑选并杀掉某个进程的过程可以参考内核源代码linux/mm/oom_kill.c，当系统内存不足的时候，out_of_memory()被触发，然后调用select_bad_process()选择一个”bad”进程杀掉。")]),s._v(" "),a("p",[s._v("如何判断和选择一个”bad进程呢？linux选择”bad”进程是通过调用oom_badness()，挑选的算法和想法都很简单很朴实：最bad的那个进程就是那个最占用内存的进程。")]),s._v(" "),a("p",[s._v("Linux下这个选择策略也一直在不断的演化。作为用户，我们可以通过设置一些值来影响OOM killer做出决策。Linux下每个进程都有个OOM权重，在/proc//oom_adj里面，"),a("strong",[s._v("取值是-17到+15")]),s._v("，取值越高，越容易被干掉。")]),s._v(" "),a("p",[s._v("最终OOM killer是通过/proc//oom_score这个值来决定哪个进程被干掉的。这个值是系统综合进程的内存消耗量、CPU时间(utime + stime)、存活时间(uptime - start time)和oom_adj计算出的，消耗内存越多分越高，存活时间越长分越低。总之，总的策略是：损失最少的工作，释放最大的内存同时不伤及无辜的用了很大内存的进程，并且杀掉的进程数尽量少。")]),s._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),a("p",[s._v("方法1：通过调整 JVM 参数限制最大可使用内存")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-Xmx2g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("方法2：启用 swap 分区 参考https://help.aliyun.com/knowledge_detail/42534.html")]),s._v(" "),a("p",[s._v("方法3：增加物理内存或增加机器")]),s._v(" "),a("p",[s._v("方法4：将应用分配到压力较小的服务器上")])],1)}),[],!1,null,null,null);a.default=r.exports}}]);