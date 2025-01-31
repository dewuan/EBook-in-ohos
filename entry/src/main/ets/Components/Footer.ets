// components/Footer.ets
@Component
export struct Footer {
  @Prop currentPage: number = 0
  @Prop totalPages: number = 0
  @Prop onPrev: () => void = () => {}
  @Prop onNext: () => void = () => {}

  build() {
    Row() {
      Button('上一页')
        .onClick(() => this.onPrev())
        .enabled(this.currentPage > 0)

      Text(`第 ${this.currentPage + 1} / ${this.totalPages} 页`)
        .fontSize(16)

      Button('下一页')
        .onClick(() => this.onNext())
        .enabled(this.currentPage < this.totalPages - 1)
    }
    .justifyContent(FlexAlign.SpaceAround)
    .width('100%')
    .padding(10)
  }
}