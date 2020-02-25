
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
];