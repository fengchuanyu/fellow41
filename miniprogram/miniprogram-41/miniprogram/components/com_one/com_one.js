// components/com_one/com_one.js
Component({
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log("attached")
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log("detached")
    },
  },
  options: {
    styleIsolation: 'shared',
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    str:{
      type:String,
      value:"你好"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:0,
    obj:{
      name:"xiao a",
      age:10
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addHandle(){
      this.setData({
        num:this.data.num+1
      })
      this.setData({
        "obj.name":"xiao b"
      })
    },
    btnHandle(){
      this.triggerEvent("myevent",{id:123});
      
    }
  },
  observers:{
    // obj(val){
    //   console.log(123);
      
    // },
    "obj.name":function(val){
      console.log(val);
    },
    num(val){
      console.log(val);
    }
  }
})
