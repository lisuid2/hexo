---
title: 友情链接
date: 2024-01-18 14:11:43
type: links
---

```yml
- name: 理随。
link: https://lisui.top/
avatar: https://s3.qjqq.cn/3/64de148060f7b.webp!color
descr: 生而无畏，站至终章
```
请 **勾选** 你符合的条件：

<div id="friends_checkbox">
<p>
    <label><input type="checkbox" onclick="checkForm()"> 我已添加 <b>lisui</b> 博客的友情链接</label>
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
