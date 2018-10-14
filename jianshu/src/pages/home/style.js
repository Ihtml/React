import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
  `
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
  `
export const HomeRight = styled.div`
  width: 280px;
  float: right;
  `
export const TopicWrapper = styled.div`
  padding: 20px 0 10px;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
  `
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    margin-right: 10px;
    float: left;
 }
  `
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`
export const MoreItems = styled.a.attrs({
  target: '_blank'
})`
  display: inline-block;
  margin-top: 7px;
  margin-left: 18px;
  font-size: 14px;
  color: #787878;
  cursor: pointer;
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`
export const RecoWriterTitle = styled.div`
  text-align: left;
  color: #969696;
  font-size: 14px;
  font-family: Georgia,Times New Roman,Times,Songti SC,serif;
`
export const WriterSwitch = styled.div`
  float: right;
  cursor: pointer;
  .spin{
    display: inline-block;
    line-height: 1;
    margin-right: 3px;
    transition: all .5s ease;
    transform-origin: center center;
  }
  &:hover {
    color: #787878;
  }
`
export const WriterList = styled.div`

`
export const WriterItem = styled.div`
  margin-top: 15px;
  line-height: 20px;
  .avatar{
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    cursor: pointer;
  }
  .avatar img{
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
  }
  .follow{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
  .name{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    cursor: pointer;
  }
  div{
    margin: 2px 0 10px;
    font-size: 12px;
    color: #969696;
  }
`
export const MoreWriter = styled.a`
  display: block;
  margin-top: 20px;
  padding: 7px 7px 7px 12px;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`
export const DownloadBox = styled.a`
  display: block;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  img{
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
  .info{
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
  }
  .title{
    ont-size: 15px;
    color: #333;
  }
  .description{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`