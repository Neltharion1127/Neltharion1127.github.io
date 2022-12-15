(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{550:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"记录一次wsl2搭建前端开发环境的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记录一次wsl2搭建前端开发环境的过程"}},[s._v("#")]),s._v(" 记录一次wsl2搭建前端开发环境的过程")]),s._v(" "),a("h3",{attrs:{id:"_1-安装wsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装wsl"}},[s._v("#")]),s._v(" 1. 安装WSL")]),s._v(" "),a("p",[s._v("直接到microsoft store中下想要的Linux发行版，然后打开，设置用户名密码即可。（本次选择ubuntu18.04）")]),s._v(" "),a("h3",{attrs:{id:"_2-修改软件源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改软件源"}},[s._v("#")]),s._v(" 2. 修改软件源")]),s._v(" "),a("p",[s._v("首先备份")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/apt/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" sources.list sources.list.bak "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" sources.list\n")])])]),a("p",[s._v("添加到文件开头内容")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse\n\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse\n\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse\n\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse\n\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse\n\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse\n\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse\n\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse\n\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse\n\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse\n\n")])])]),a("h3",{attrs:{id:"_2-安装nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装nodejs"}},[s._v("#")]),s._v(" 2. 安装nodejs")]),s._v(" "),a("p",[s._v("更新")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n")])])]),a("p",[s._v("替换nodejs 源")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sL https://deb.nodesource.com/setup_16.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -E "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -\n")])])]),a("p",[s._v("其中的16.x可以换成需要的版本\n这个脚本将会添加 NodeSource 的签名 key 到你的系统，创建一个 apt 源文件，安装必备的软件包，并且刷新 apt 缓存。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nodejs\n")])])]),a("p",[s._v("验证是否安装成功")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" --version\n")])])]),a("h3",{attrs:{id:"_3-windows环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-windows环境"}},[s._v("#")]),s._v(" 3. windows环境")]),s._v(" "),a("p",[s._v("在本机上下载vscode，安装remote-WSL\n在ubuntu中运行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("code "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);