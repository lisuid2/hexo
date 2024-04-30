---
title: 友情链接
date: 2024-01-18 14:11:43
type: links
---
{% fold 友情链接页免责声明 %}
# 免责声明
本博客遵守中华人民共和国相关法律。本页内容仅作为方便学习而产生的快速链接的链接方式，对与友情链接中存在的链接、好文推荐链接等均为其他网站。我本人能力有限无法逐个甄别每篇文章的每个字，并无法获知是否在收录后原作者是否对链接增加了违反法律甚至其他破坏用户计算机等行为。

所以在我力所能及的情况下，我会包括但不限于：
- 针对收录的博客中的绝大多数内容通过标题来鉴别是否存在有风险的内容 在收录的友链好文推荐中检查是否存在风险内容
但是你在访问的时候，仍然无法避免，包括但不限于：
- 作者更换了超链接的指向，替换成了其他内容
- 作者的服务器被恶意攻击、劫持、被注入恶意内容
- 作者的域名到期，被不法分子用作他用
- 作者修改了文章内容，增加钓鱼网站、广告等无效信息
- 不完善的隐私保护对用户的隐私造成了侵害、泄漏
系```lisui42@outlook.com```
{% endfold %}
{% fold 我的友链  %}
```yml
- name: 理随。
link: https://lisui.top/
avatar: https://s3.qjqq.cn/3/64de148060f7b.webp!color
descr: 生而无畏，站至终章
```
{% endfold %}
<style>
    .tk-comments > .tk-submit {
        opacity: 0;
        height: 0;
        transition: opacity .5s, height .5s;
        overflow: hidden;
    }
</style>
<script>
    var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
    if (twikooSubmit) {
        twikooSubmit.style.opacity = "0";
    }
    function checkForm() {
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        var checkbox3 = document.getElementById("checkbox3");
        var checkbox4 = document.getElementById("checkbox4");
        var checkbox5 = document.getElementById("checkbox5");
        var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
        if (checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
            twikooSubmit.style.opacity = "1";
            twikooSubmit.style.height = "auto";
            twikooSubmit.style.overflow = "auto";
            var input = document.getElementsByClassName('el-textarea__inner')[0];
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', true, true);
            input.value = '昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n';