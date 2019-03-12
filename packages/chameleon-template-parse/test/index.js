const compileTemplate = require('../src/index.js');
const source = `<view c-bind:click="handleClick(1,2,3)" style="width:400cpx;height:200cpx;background-color:red">change-component
<view c-bind:click="handleBubble" style="width:200cpx;height:50cpx;background-color:green"> 触发冒泡</view>
</view>`
// <view><text :class="{{true? 'bg-green':''}}" >fafafa</text></view>
// <view><text :class="true? 'bg-green':''" >fafafa</text></view>
//
// let result = compileTemplate(source,'web');
let options = {lang: 'cml',
  filePath: '/Users/didi/components.cml',
  buildInComponents: {button: "cml-buildin-button"},
  cmss: {
    rem: true,
    scale: 0.5,
    remOptions: {
    // base on 750px standard.
      rootValue: 75,
      // to leave 1px alone.
      minPixelValue: 1.01
    },
    autoprefixOptions: {
      browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
    }
  },
  usingComponents: [{
    tagName: 'cube-button',
    refUrl: '/path/to/ref1',
    filePath: 'path/to/real1',
    isNative: false
  }, {
    tagName: 'thirdComp2',
    refUrl: '/path/to/ref2',
    filePath: 'path/to/real2',
    isNative: false
  }]
};
console.log('before-compile', source);
<<<<<<< HEAD
// let result_web = compileTemplate(source, 'web', options);
// let result_weex = compileTemplate(source, 'weex', options);
let result_wx = compileTemplate(source, 'wx', options);
// let result_baidu = compileTemplate(source, 'wx', options);
// let result_alipay = compileTemplate(source, 'alipay', options);
// console.log('result_web', result_web)
// console.log('result_weex', result_weex)
console.log('result_wx', result_wx)
// console.log('result_alipay', result_alipay)
=======
let result_web = compileTemplate(source, 'web', options);
// let result_wx = compileTemplate(source, 'wx', options);
// let result_baidu = compileTemplate(source, 'wx', options);
let result_alipay = compileTemplate(source, 'alipay', options);
// let result_alipay = compileTemplate(source,'alipay',{lang:'cml'});
console.log('result_web', result_web)
// console.log('result_wx', result_wx)
console.log('result_alipay', result_alipay)
>>>>>>> 2a10c8365248948fb345ed3c09c3af1f6f385036
