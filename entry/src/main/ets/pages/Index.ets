// MainAbility/pages/index.ets
import { BookReader } from '../Components/BookReader'

@Entry
@Component
struct Index {
  build() {
    Column() {
      BookReader()
    }
    .width('100%')
    .height('100%')
  }
}