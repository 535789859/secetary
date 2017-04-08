angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
  //设置IOS Android tabs 定位在底部
$ionicConfigProvider.tabs.position("bottom");
  $stateProvider.state("tabs",{
    url:"/tabs",
    abstract:true,
    templateUrl:"templates/tabs.html",
    controller:"tabController"
  });
  $stateProvider.state("tabs.recorders",{
    url:"/recorders",
  views:{
      "tab-recorders":{
        templateUrl:"templates/recorders.html",
        controller:"recoderController"
      }
  }

  });

  $stateProvider.state("tabs.recordersList", //状态
    {
      //录入信息页面的type 001
      //进入详情页面 传下标
    url:"/recordersList/:type", //页面文件位置
    views:{//视图功能
      //视图的名字
      "tab-recorders":{ //切换后的名字
        templateUrl:"templates/recordersList.html"  , //提供组件的文件的路径
        controller:"RecorderWriteController"   //对该路径文件添加控制器
      }
    }
  });
  // $stateProvider.state("tabs.detail",{
  //   url:"/detail",
  //   views:{
  //     "tab-recorders":{
  //       templateUrl:"templates/detail.html",
  //       controller:"detailController"
  //     }
  //   }
  //
  // });
  $stateProvider.state("tabs.friends",{
    url:"/friends",
    views:{
      "tab-friends":{
        templateUrl:"templates/friends.html"
      }
    }
  });
  $stateProvider.state("tabs.setting",{
    url:"/setting",
    views:{
      "tab-setting":{
        templateUrl:"templates/setting.html",
        controller:"settingController"
      }
    }
  });
  $stateProvider.state("tabs.circle",{
    url:"/circle",
    views:{
      "tab-circle":{
        templateUrl:"templates/circle.html"
      }
    }
  });

  $urlRouterProvider.otherwise("/tabs/recorders");


});
