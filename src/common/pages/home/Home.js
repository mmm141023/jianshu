import React, {Component} from "react";
import {
    ArticleItem,
    ArticleSection,
    ArticleWrapper, BodyWrapper,
    ImgWrapper,
    ReadMore,
    Recommend, RecommendItem,
    RecommendWrapper
} from "../../header/style";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <BodyWrapper>
                    <ArticleWrapper>
                        <ImgWrapper>
                            <img className="img"
                                 src="https://upload.jianshu.io/admin_banners/web_images/4969/efed5888b8c06b5eae2e58bf6181846de4246178.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                                 alt=""/>
                        </ImgWrapper>

                        <ArticleSection>
                            <Link to={'/detail'}>
                                <ArticleItem>
                                    <h2 className="h2">写在高考55天</h2>
                                    <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                    <img className="img"
                                         src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                         alt=""/>
                                </ArticleItem>
                            </Link>

                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img"
                                     src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                     alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img"
                                     src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                     alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img"
                                     src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                     alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img"
                                     src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                     alt=""/>
                            </ArticleItem>
                            <ArticleItem>
                                <h2 className="h2">写在高考55天</h2>
                                <h3 className="h3">最近简书贝市场页面总是进不去，想卖1000贝出去，点击了简友北城锦瑟的挂单，刚点了支付贝就看不到了，重新进去就点不开了，也不知道订单状态。想起几...</h3>
                                <img className="img"
                                     src="https://upload-images.jianshu.io/upload_images/11668473-f606651ae9698b08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
                                     alt=""/>
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

export default Home