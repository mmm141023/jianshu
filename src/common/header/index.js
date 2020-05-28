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
} from './style'
import {actionCreators} from './store'
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        const {searchFlag,mouseFlag, crombList, changeFlagTrue, changeFlagFalse, whenMouseEnter,whenMouseLeave} = this.props
        return (
            <div>
                <HeaderWrapper>
                    <TitleContainer>
                        <Link to={'/'}>
                            <img className="logo"
                                 src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt=""/>
                        </Link>
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