import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '@IT·互联网',
    imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },
  {
    id: 2,
    title: '摄影',
    imgUrl: 'https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }
  ],
  articList: [
    {
      id: 1,
      title: '一段标题',
      desc: '一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/13199565-53a2ec58225fa5ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 2,
      title: '一段标题',
      desc: '一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/13199565-53a2ec58225fa5ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    },
    {
      id: 3,
      title: '一段标题',
      desc: '一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述一段很长的描述',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/13199565-53a2ec58225fa5ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },
    {
      id: 2,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },
    {
      id: 3,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 4,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 5,
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ]

})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
