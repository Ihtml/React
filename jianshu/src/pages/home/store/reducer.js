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
  ]

})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
