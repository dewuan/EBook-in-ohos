// components/SettingsPanel.ets
@Component
export struct SettingsPanel {
  @Link @Watch('onFontSizeChange') fontSize: number
  @Link isNightMode: boolean
  @State showSlider: boolean = false

  private onFontSizeChange() {
    // 用于触发页面重新计算
  }

  build() {
    Column() {
      Row() {
        Text('字体大小: ')
        Button('-')
          .onClick(() => this.fontSize > 12 && (this.fontSize -= 2))
          .onTouch(e => e.type === TouchType.LongPress && (this.showSlider = true))

        Text(this.fontSize.toString())

        Button('+')
          .onClick(() => this.fontSize < 30 && (this.fontSize += 2))
          .onTouch(e => e.type === TouchType.LongPress && (this.showSlider = true))
      }

      Row() {
        Text('夜间模式: ')
        Toggle({ type: ToggleType.Checkbox, isOn: this.isNightMode })
          .onChange(v => this.isNightMode = v)
      }

      if (this.showSlider) {
        Slider({
          value: this.fontSize,
          min: 12,
          max: 30,
          step: 2
        })
          .onChange(v => this.fontSize = v)
          .width('80%')
      }
    }
    .padding(20)
    .backgroundColor('#fff')
    .borderRadius(8)
  }
}