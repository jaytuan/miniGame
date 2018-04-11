//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    currentChooseFatherInde:-1,
    currentChooseSelfInde:-1,
    lostNum:3,
    arr:[
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //     "disabled":true
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":8,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":8,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":8,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":8,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":8,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":0,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":0,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":8,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }],
        // [{
        //     "valu":3,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":5,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":7,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":8,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":9,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":6,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":2,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":1,
        //     "bgclass":'',
        //   },
        //   {
        //     "valu":4,
        //     "bgclass":'',
        //   }]
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    useTime:'00:00:00',
    rowArray:[],
    columArray:[]
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

    this.initGobang();
  },
  initGobang:function(){
    var childs = 0,
    sourFatherArr = [],
    rowArray = [],
    columArray = [];
    while( childs < 9 ){
          var sour = [1,2,3,4,5,6,7,8,9],
              sourChildArr = [];
          var loopTimes = 3;//随机空缺个数
          sour.sort(function(){
              return Math.random() > 0.5
          });
          // while(loopTimes > 0){
          //     var randomIndex = Math.floor(Math.random()*9);
          //     sour[randomIndex] = 0;
          //     loopTimes--;
          // }
          for(let i =0; i < sour.length; i++){
                if( rowArray[ Math.floor(i/3) + Math.floor(childs/3)*3] ){
                        var rowResult = this.checkHasRepeat(rowArray,columArray,i,childs,sour);
                        // var rowResult = this.checkHasRepeat(rowArray[ Math.floor(i/3) + Math.floor(childs/3)*3 ],sour,i);
                        sour = rowResult.sour;
                        rowArray  = rowResult.rowArray;
                        columArray = rowResult.columArray
                }else{
                    rowArray[ Math.floor(i/3) + Math.floor(childs/3)*3 ] = [sour[i]];
                    if( columArray[ i%3 + childs%3*3 ] ){
                        columArray[ i%3 + childs%3*3 ].push(sour[i]);
                    }else{
                         columArray[ i%3 + childs%3*3 ] = [sour[i]];
                    }
                }
                var sourObj = {}
                sourObj.valu = sour[i];
                sourObj.bgclass = '';
                sourObj.disabledChange = sour[i] != 0;
                sourChildArr.push(sourObj);
          }
         sourFatherArr.push(sourChildArr); 
         childs++;
    }
     this.setData({
        arr:sourFatherArr
     })

  },
  checkHasRepeat: function(rowArray,columArray,index,childs,sour){
        var flag = false,
            rowInsert = rowArray[ Math.floor(index/3) + Math.floor(childs/3)*3 ],
            colInsert = columArray[ index%3 + childs%3*3 ];

        var temp;
        for(let i = 0;i<rowInsert.length;i++){
            if(rowInsert[i] == sour[index]){
                flag = true;
                break;
            }
        }
        if( colInsert instanceof Array ){
            for(let j = 0;j<colInsert.length;j++){
                if(colInsert[j] ==  sour[index]){
                    flag = true;
                    break;
                }
            }
        }
        if(flag){
            temp = sour[index];
            sour.splice(index,1);
            sour.push(temp);
           return this.checkHasRepeat(rowArray,columArray,index,childs,sour);
        }else{
            rowInsert.push(sour[index]);
            if( colInsert instanceof Array ){
                colInsert.push(sour[index]);
            }else{
                colInsert = [sour[index]];
            }
            console.log(rowArray);
            console.log(columArray);
            console.log(sour);
            return { rowArray,columArray,sour}
        }
  },
  chooseToChange:function(even){
      var data = even.currentTarget.dataset,
      arrSource = this.data.arr,
      fatherClou = data.fatherIndex%3 + 1,
      fatherRow = Math.floor(data.fatherIndex/3) + 1,
      selfClou = data.selfIndex%3 + 1,
      selfRow = Math.floor(data.selfIndex/3) + 1;
      if( data.disabled ){
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
