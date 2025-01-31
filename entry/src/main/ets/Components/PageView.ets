// components/PageView.ets
@Component
export struct PageView {
  @Prop content: string = ''
  @Prop fontSize: number = 20
  @Prop isNightMode: boolean = false

  build() {
    Scroll() {
      Text(this.content)
        .fontSize(this.fontSize)
        .textAlign(TextAlign.Start)
        .lineHeight(this.fontSize * 1.5)
        .padding(20)
    }
    .height('65%')
    .backgroundColor(this.isNightMode ? '#333' : '#fff')
  }
}