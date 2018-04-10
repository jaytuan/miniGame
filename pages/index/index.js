//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    currentChooseFatherInde:-1,
    currentChooseSelfInde:-1,
    arr:[
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":8,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":8,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":8,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":8,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":8,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":0,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":0,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":8,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }],
        [{
            "valu":3,
            "bgclass":'',
          },
          {
            "valu":5,
            "bgclass":'',
          },
          {
            "valu":7,
            "bgclass":'',
          },
          {
            "valu":8,
            "bgclass":'',
          },
          {
            "valu":9,
            "bgclass":'',
          },
          {
            "valu":6,
            "bgclass":'',
          },
          {
            "valu":2,
            "bgclass":'',
          },
          {
            "valu":1,
            "bgclass":'',
          },
          {
            "valu":4,
            "bgclass":'',
          }]
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    useTime:'00:00:00'
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   //url: '../logs/logs'
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  chooseToChange:function(even){
      var data = even.currentTarget.dataset,
      arrSource = this.data.arr,
      fatherClou = data.fatherIndex%3 + 1,
      fatherRow = Math.floor(data.fatherIndex/3) + 1,
      selfClou = data.selfIndex%3 + 1,
      selfRow = Math.floor(data.selfIndex/3) + 1;
      if( arrSource[data.fatherIndex][data.selfIndex].valu > 0){
        return false;
      }
      for (var i = 0; i < arrSource.length; i++) {
        for(var j=0;j<arrSource[i].length;j++){
            if(data.fatherIndex == i && data.selfIndex == j){
              arrSource[i][j].bgclass = "hasChoose";
            }else if((i%3+1 == fatherClou && j%3+1 == selfClou) ||(fatherRow == (Math.floor(i/3) + 1) && selfRow == (Math.floor(j/3) + 1))){
              arrSource[i][j].bgclass = "hasChoosedClou";
            }else{
              arrSource[i][j].bgclass = "";
            }
        }
      };
      this.setData({
        arr : arrSource,
        currentChooseFatherInde : data.fatherIndex,
        currentChooseSelfInde : data.selfIndex
      })
  },
  writeNum: function(e){
    var data = e.currentTarget.dataset;
    var that = this;
    if(this.data.currentChooseFatherInde < 0 && this.data.currentChooseSelfInde < 0){
      return false;
    }else{
      that.data.arr[that.data.currentChooseFatherInde][that.data.currentChooseSelfInde].valu = data.value;
      this.setData({
         arr : that.data.arr
      });
    }

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
