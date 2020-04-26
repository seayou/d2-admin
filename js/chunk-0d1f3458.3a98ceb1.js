(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d1f3458","chunk-2d0f0a33","chunk-2d0dd10e","chunk-2d0c73d2"],{5089:function(t,n){t.exports="在 `D2 Crud` 组件中传入 `pagination` 对象，即可开启分页。代码如下：\n"},8099:function(t,n,e){"use strict";e.r(n);var a=e("8bbf"),i=e.n(a),r=e("d075"),o=e.n(r);i.a.use(o.a)},"9ce8":function(t,n,e){"use strict";e.r(n),n["default"]="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :loading=\"loading\"\n      :pagination=\"pagination\"\n      @pagination-current-change=\"paginationCurrentChange\"/>\n  </div>\n</template>\n\n<script>\nimport { businessTable1List } from '@api/demo.business.table.1'\n\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '卡密',\n          key: 'key',\n          width: 320\n        },\n        {\n          title: '面值',\n          key: 'value'\n        },\n        {\n          title: '管理员',\n          key: 'admin'\n        },\n        {\n          title: '创建时间',\n          key: 'dateTimeCreat'\n        },\n        {\n          title: '使用时间',\n          key: 'dateTimeUse'\n        }\n      ],\n      data: [],\n      loading: false,\n      pagination: {\n        currentPage: 1,\n        pageSize: 5,\n        total: 0\n      }\n    }\n  },\n  mounted () {\n    this.fetchData()\n  },\n  methods: {\n    paginationCurrentChange (currentPage) {\n      this.pagination.currentPage = currentPage\n      this.fetchData()\n    },\n    fetchData () {\n      this.loading = true\n      businessTable1List({\n        ...this.pagination\n      }).then(res => {\n        this.data = res.list\n        this.pagination.total = res.page.total\n        this.loading = false\n      }).catch(err => {\n        console.log('err', err)\n        this.loading = false\n      })\n    }\n  }\n}\n<\/script>"},ef69:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var a=e("9bd2");function i(t){return Object(a["a"])({url:"/demo/business/table/1/fetch",method:"get",params:t})}},f083:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("d2-container",[e("template",{slot:"header"},[t._v("分页")]),e("d2-crud",{attrs:{columns:t.columns,data:t.data,loading:t.loading,pagination:t.pagination},on:{"pagination-current-change":t.paginationCurrentChange}}),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-markdown",{attrs:{source:t.doc}})],1),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-highlight",{attrs:{code:t.code}})],1),e("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://d2.pub/zh/doc/d2-crud-v2"},slot:"footer"})],2)},i=[],r=(e("a4d3"),e("4de4"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("ade3")),o=(e("8099"),e("5089")),c=e.n(o),s=e("9ce8"),d=e("ef69");function u(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){Object(r["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var g={data:function(){return{doc:c.a,code:s["default"],columns:[{title:"卡密",key:"key",width:320},{title:"面值",key:"value"},{title:"管理员",key:"admin"},{title:"创建时间",key:"dateTimeCreat"},{title:"使用时间",key:"dateTimeUse"}],data:[],loading:!1,pagination:{currentPage:1,pageSize:5,total:0}}},mounted:function(){this.fetchData()},methods:{paginationCurrentChange:function(t){this.pagination.currentPage=t,this.fetchData()},fetchData:function(){var t=this;this.loading=!0,Object(d["a"])(l({},this.pagination)).then((function(n){t.data=n.list,t.pagination.total=n.page.total,t.loading=!1})).catch((function(n){console.log("err",n),t.loading=!1}))}}},p=g,h=e("2877"),f=function(t){t.options.__source="src/views/demo/d2-crud/demo29/index.vue"},b=f,m=Object(h["a"])(p,a,i,!1,null,null,null);"function"===typeof b&&b(m);n["default"]=m.exports}}]);