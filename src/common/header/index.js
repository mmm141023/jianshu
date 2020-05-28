import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    HeaderWrapper,
    TitleContainer,
    TitleNavBar,
    TitleNavItem,
    RegisterButton,
    SearchInput,
    SearchCrumb,
    SearchSwitch,
    SearchTitle,
    SearchItem,
    SearchItemContainer,
    SearchContainer,
    BodyWrapper,
    ArticleWrapper,
    RecommendWrapper,
    ImgWrapper,
    ArticleSection,
    ArticleItem,
    Recommend,
    RecommendItem,
    ReadMore
} from './style'
import {actionCreators} from './store'

class Header extends Component {

    render() {
        const {searchFlag,mouseFlag, crombList, changeFlagTrue, changeFlagFalse, whenMouseEnter,whenMouseLeave} = this.props
        return (
            <div>
                <HeaderWrapper>
                    <TitleContainer>
                        <img className="logo"
                             src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt=""/>
                        <TitleNavBar>
                            <TitleNavItem className="left active">首页</TitleNavItem>
                            <TitleNavItem className="left">下载App</TitleNavItem>
                            <TitleNavItem className="right">登录</TitleNavItem>
                            <TitleNavItem className="right"><i className="iconfont">&#xe636;</i></TitleNavItem>
                            <SearchContainer>
                                <SearchInput
                                    className={searchFlag ? 'long' : ''}
                                    onFocus={changeFlagTrue}
                                    onBlur={changeFlagFalse}
                                >
                                </SearchInput>
                                <i className={searchFlag ? 'iconfont search show' : 'iconfont search'}>&#xe614;</i>
                                <SearchCrumb className={(searchFlag || mouseFlag) ? 'show' : ''}
                                             onMouseEnter={whenMouseEnter}
                                             onMouseLeave={whenMouseLeave}
                                >
                                    <SearchTitle>热门搜索</SearchTitle>
                                    <SearchSwitch><i className="iconfont">&#xe606;</i>换一批</SearchSwitch>
                                    <SearchItemContainer>
                                        {
                                            crombList.map((item, index) => {
                                                return <SearchItem key={item.toJS().id}>{item.toJS().name}</SearchItem>
                                            })
                                        }
                                    </SearchItemContainer>
                                </SearchCrumb>
                            </SearchContainer>
                        </TitleNavBar>
                        <RegisterButton className="reg">注册</RegisterButton>
                        <RegisterButton className="write"><i className="iconfont">&#xe6e5;</i>写文章</RegisterButton>
                    </TitleContainer>
                </HeaderWrapper>
                <BodyWrapper>
                    <ArticleWrapper>
                        <ImgWrapper>
                            <img className="img" src="https://upload.jianshu.io/admin_banners/web_images/4969/efed5888b8c06b5eae2e58bf6181846de4246178.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                        </ImgWrapper>

                        <ArticleSection>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img" src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img" src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img" src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img" src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img" src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img" src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                            </ArticleItem>
                        </ArticleSection>
                        <ReadMore>阅读更多</ReadMore>
                    </ArticleWrapper>

                    <RecommendWrapper>
                        <Recommend>
                            <RecommendItem></RecommendItem>
                            <RecommendItem></RecommendItem>
                            <RecommendItem></RecommendItem>
                            <RecommendItem></RecommendItem>
                        </Recommend>
                    </RecommendWrapper>
                </BodyWrapper>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        searchFlag: state.getIn(['header', 'searchFlag']),
        mouseFlag: state.getIn(['header', 'mouseFlag']),
        crombList: state.getIn(['header', 'crombList'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeFlagTrue() {
            dispatch(actionCreators.changeFlagTrue())
            dispatch(actionCreators.getCrombs())
        },
        changeFlagFalse() {
            dispatch(actionCreators.changeFlagFalse())
        },
        whenMouseEnter() {
            dispatch(actionCreators.whenMouseEnter())
        },
        whenMouseLeave() {
            dispatch(actionCreators.whenMouseLeave())
        }
    }
}


export default connect(mapState, mapDispatch)(Header)