import Quill from 'quill';

class Counter {
    container: HTMLDivElement;
    constructor(quill, options) {
        console.log('quill:', quill);
        console.log('options:', options);
        this.container = quill.addContainer('ql-counter');
        quill.on(Quill.events.TEXT_CHANGE, () => {
        const text = quill.getText(); // 获取编辑器中的纯文本内容
        const char = text.replace(/\s/g, ''); // 使用正则表达式将空白字符去掉
        this.container.innerHTML = `当前字数：${char.length}`;
        });
    }
}

export default Counter;
