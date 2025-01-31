// components/Header.ets
@Component
export struct Header {
  @Prop bookName: string = '未选择书籍'
  @Prop onImport: () => void = () => {}

  build() {
    Row() {
      Text(this.bookName)
        .fontSize(18)
        .margin({ left: 10 })
        .maxLines(1)

      Blank()

      Button('+')
        .onClick(() => this.onImport())
        .margin({ right: 10 })
    }
    .width('100%')
    .height(50)
  }
}