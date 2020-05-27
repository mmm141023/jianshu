import styled from "styled-components";

export const HeaderWrapper = styled.div`
    height: 56px;
    width: 100%;
    background: #fff;
    border: solid 1px #f0f0f0;
    border-top: none;
    box-shadow: 0 0 5px rgba(0,0,0,.4);
`;

export const TitleContainer = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .logo{
        float: left;
        width: 100px;
        height:100%;
        margin-right: 90px;
        cursor: pointer;
    }
`;

export const TitleNavBar = styled.div`
    width: 960px;
    height: 100%;
    flex: 1;
    position: relative;
`;

export const TitleNavItem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    font-size: 1.5em;
    cursor: pointer;
    .iconfont{
        font-size: 1.3em;
    }
    &.left{
        float: left;
    }
    &.right{
        float: right;
    }
    &.active{
        color: red;
    }
`;
export const SearchContainer = styled.div`
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .search{
        position: absolute;
        right: 0;
        top: 0;
        display: block;
        text-align: center;
        line-height: 40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transition: all .6s ease-in;
    }
    .show{
        background: #aaa;
    }
`;

export const SearchInput = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 140px;
    height: 30px;
    padding: 5px 30px 5px 15px;
    border-radius: 20px;
    border: none;
    background: #ddd;
    outline: none;
    transition: all .3s ease-in;
    &.long{
        width: 250px;
    }
`;

export const SearchCrumb = styled.div`
    opacity: 0;
    width: 300px;
    padding: 20px 20px;
    box-shadow: 0 0 5px rgba(0,0,0,.4);
    position: absolute;
    top: 120%;
    left: -20px;
    overflow: hidden;
    &.show{
        background: white;
        opacity: 1;
    }
`;

export const SearchSwitch = styled.div`
    cursor: pointer;
    float: right;
    .iconfont{
        margin-right: 6px;
        font-size: .9em;
    }
`;
export const SearchItemContainer = styled.div`
    overflow:hidden;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    border-top: solid 1px rgba(0,0,0,.3);
`;
export const SearchTitle = styled.div`
    float: left;
`;
export const SearchItem = styled.div`
    border: solid 1px black;
    float: left;
    padding: 7px;
    border-radius: 3px;
    cursor: pointer;
    background: #eee;
    border: none;
    margin-top: 10px;
    margin-left: 10px;
`;

export const RegisterButton = styled.div`
    height: 38px;
    float: right;
    border: solid 1px red;
    margin: 0 10px 0 20px;
    font-size: 1.5em;
    border-radius: 19px;
    text-align: center;
    line-height: 38px;
    padding: 0 15px;
    cursor: pointer;
    .iconfont {
        margin-right: 3px;
    }
    &.reg{
        color: red;
    }
    &.write{
        color: white;
        background: #EA6F5A;
    }
`;
