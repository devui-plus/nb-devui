
import { ExamplePanelComponent } from './example-panel.component';

export const routesConfig = [
  {
    path: 'color-picker',
    component: ExamplePanelComponent,
    loadChildren: '../components/color-picker/demo/color-picker-demo.module#ColorPickerDemoModule',
    data: {
      name: 'ColorPicker',
      cnName: '颜色选择器',
      description: '颜色选择器用于更换选中元素的色彩。',
      tmw: '当用户需要更换色块或元素背景的颜色时使用。'
    }
  },
  {
    path: 'smart-input',
    component: ExamplePanelComponent,
    loadChildren: '../components/smart-input/demo/smart-input-demo.module#SmartInputDemoModule',
    data: {
      name: 'SmartInput',
      cnName: '文本输入',
      description: '文本输入',
      tmw: '用户通过键盘输入字符；可以选择输入框大小、禁用组件、一键清除字符等。'
    }
  },
];