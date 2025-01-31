// components/BookReader.ets
import { Header } from './Header'
import { PageView } from './PageView'
import { Footer } from './Footer'
import { SettingsPanel } from './SettingsPanel'
import { Book } from '../model/Book'
import { Pagination } from '../utils/Pagination'
import { FileUtils } from '../utils/FileUtils'
import { SafeArea } from '../utils/SafeArea'

@Component
export struct BookReader {
  @State book: Book = new Book()
  @State fontSize: number = 20
  @State isNightMode: boolean = false
  @State showSettings: boolean = false
  @State safeAreaBottom: number = 34

  aboutToAppear() {
    SafeArea.getBottomHeight(this).then(height => {
      this.safeAreaBottom = height
    })
  }

  private async loadFile() {
    try {
      const fileResult = await FileUtils.loadTextFile()
      const name = fileResult.name
      const content = fileResult.content
      this.book = {
        name,
        content,
        pages: Pagination.calculatePages(content, this.fontSize, 600) // 600为阅读区高度
      }
    } catch (error) {
      console.error('文件加载失败:', error)
    }
  }

  build() {
    Column() {
      Header({
        bookName: this.book.name,
        onImport: this.loadFile.bind(this)
      })

      PageView({
        content: this.book.pages[this.book.currentPage] || '',
        fontSize: this.fontSize,
        isNightMode: this.isNightMode
      })

      Footer({
        currentPage: this.book.currentPage,
        totalPages: this.book.pages.length,
        onPrev: () => this.book.currentPage > 0 && this.book.currentPage--,
        onNext: () => this.book.currentPage < this.book.pages.length - 1 && this.book.currentPage++
      })

      Blank()
        .height(this.safeAreaBottom)
    }
    .height('100%')
    .backgroundColor(this.isNightMode ? '#222' : '#f5f5f5')
  }
}