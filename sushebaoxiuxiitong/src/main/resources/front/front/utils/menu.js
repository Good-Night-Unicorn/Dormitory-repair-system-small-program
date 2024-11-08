const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"故障上报",
                        "menuJump":"列表",
                        "tableName":"guzhangshangbao"
                    }
                ],
                "menu":"故障上报"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"故障上报评价信息",
                        "menuJump":"列表",
                        "tableName":"guzhangshangbaoCommentback"
                    }
                ],
                "menu":"我的故障上报评价信息"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"新闻信息",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"新闻信息"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"学生",
        "tableName":"xuesheng"
    }
]

	}
}
export default menu;
