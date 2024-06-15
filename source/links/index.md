---
title: 友情链接
date: 2024-01-18 14:11:43
type: links
---

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

```yml
- name: 理随。
link: https://lisui.top/
avatar: https://s3.qjqq.cn/3/64de148060f7b.webp!color
descr: 生而无畏，站至终章
```
请 **勾选** 你符合的条件：

<div id="friends_checkbox">
<p>
    <label><input type="checkbox" onclick="checkForm()"> 我已添加 <b>btwoa</b> 博客的友情链接</label>
</p>
<p>
    <label><input type="checkbox" onclick="checkForm()"> 我的链接主体为 <b>个人</b>，网站类型为<b>博客</b></label>
</p>
<p>
    <label><input type="checkbox" onclick="checkForm()"> 我的网站现在可以在中国大陆区域正常访问</label>
</p>
<p>
    <label><input type="checkbox" onclick="checkForm()"> 网站内容符合中国大陆法律法规</label>
</p>
</div>

<script>
function checkForm() {
    let comment = document.querySelector('.wl-comment');
    if(comment===null) return;
    let checkboxes = document.querySelectorAll('#friends_checkbox input[type="checkbox"]');
    let content = document.querySelector('.wl-editor');
    let allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    if (allChecked) {
        comment.style.display = 'block';
        content.value = "```yaml \n- name: \n  link: \n  avatar: \n  descr: \n```";
        content.focus();
    } else {
        comment.style.display = 'none';
        content.value = '';
    }
}
window.onload = checkForm;
document.addEventListener('pjax:complete', checkForm);
</script>
