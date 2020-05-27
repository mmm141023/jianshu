import React, {Component} from "react";
import {HeaderWrapper,
    TitleContainer,
    TitleNavBar,
    TitleNavItem,
    RegisterButton,
    SearchInput,
    SearchContainer} from './style'
class Header extends Component {
    render() {
        return (
            <div>
                <HeaderWrapper>
                    <TitleContainer>
                        <img className="logo" src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt=""/>
                        <TitleNavBar>
                            <TitleNavItem className="left active">首页</TitleNavItem>
                            <TitleNavItem className="left">下载App</TitleNavItem>
                            <TitleNavItem className="right">登录</TitleNavItem>
                            <TitleNavItem className="right"><i className="iconfont">&#xe636;</i></TitleNavItem>
                            <SearchContainer>
                                <SearchInput></SearchInput>
                                <i className="iconfont">&#xe614;</i>
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

export default Header