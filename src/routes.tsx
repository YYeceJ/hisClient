// import React from "react";
// import Bundle from "./utils/Bundle";

import { Navigator } from "./containers/Navigator";
import { WechatNavigator } from "./containers/WechatNavigator";
import { WechatStsHomesorkNavigator } from "./containers/WechatStsHomesorkNavigator";

export default function createRoutes(): any[] {
    return [
        {
            path: "/",
            component: Navigator,
            exact: true
        },
        {
            path: "/WechatParentReport",
            component: WechatNavigator,
        },
        {
            path:"/StsHomework",
            component:WechatStsHomesorkNavigator,
        }
    ];
}
