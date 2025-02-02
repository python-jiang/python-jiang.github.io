---
title: "学习编程的前置知识"
excerpt: "诚信、标准化、开源运动<br/><img src='/images/500x300.png'>"
collection: portfolio
---

|       主题        |                                   论点                                   |
|:---------------:|:----------------------------------------------------------------------:|
|       诚信        | [博弈论的收益，以及选择诚信策略的人口的增长。](https://www.bilibili.com/video/BV19T4m1U7qX/) | 
|       标准化       |                    一个问题你能提出来，大概率已经有人解决过了，而且形成了工具集。没必要从头造轮子。                     | 
|      网络内容       |                      我应该相信网友的回答吗？CPU针脚真的要涂胶水再安装吗？                      |
|      开源运动       |                  免费的都是最贵的吗？MIT公开课、Apache、arxiv、Linux。                  |
|      盗版问题       |          学生邮箱有免费使用软件的特权。甚至一些key就是主动放出的。盗版游戏你觉得好玩的也会在steam补票。           |
|      计算机安全      | 大公司开展正常业务赚取的费用，远大于用你电脑挖矿的收益。大公司的声誉更重要。思考：当你下载并使用互联网上的内容时，风险与收益相匹配吗？|
|      能力与责任      |                        当你有能力这样做的时候，你发现已经没有必要做了。                        |

理科生学习编程的初始阻力：
--
1、别名罪。编程的复杂性，很大程度上来源于命名混乱，比如给同一个概念起很多别名，
给同一个指针或引用起很多别名。物理里面直接统一热量和机械能的单位，甚至统一了
引力质量和惯性质量的单位。编程领域只会名字越来越多，语言和框架都是。且不提翻译
导致的专有名词非标准化，光是函数、方法、过程、映射、算子、算符、变换就够初学者
迷惑一阵子了。

2、长名字。编程领域的字母信息密度极低，物理公式的一个字母就能代表一个守恒量，
而Spring的static类里的一个常量的名字就长达三四十个字母，没有IDE的补全是
不可能逐字敲完还每次都不写错的。习惯了高密度信息公式的脑子，看这种大常量名字
会非常抵触，容易导致注意力涣散。  

3、最佳实践。数学定理的证明往往都有最佳实践路线，有复杂的证法，也有简单的证法，
但是公理就那几条，公理之间互相独立、表述上各司其职、不重不漏。编程语言就不是了，
关键字里既给你if、else表达式，又给你问号冒号三目运算符；既给你for又给你while。
你若有选择困难症，或者想继续极简主义的话，建议先学Lisp而不是C。  

4、信息传递的单向性。这就得谈谈=号的定义了。