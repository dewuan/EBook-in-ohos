// utils/Pagination.ets
export class Pagination {
  static calculatePages(content: string, fontSize: number, pageHeight: number): string[] {
    const lineHeight = fontSize * 1.5;
    const maxLines = Math.floor(pageHeight / lineHeight);
    const lines = content.split('\n');
    let currentPage: string[] = [];
    const pages: string[] = [];

    lines.forEach(line => {
      const lineChunks = Math.ceil(line.length / 40); // 每行约40字符
      if (currentPage.length + lineChunks > maxLines) {
        pages.push(currentPage.join('\n'));
        currentPage = [];
      }
      currentPage.push(line);
    });

    if (currentPage.length > 0) {
      pages.push(currentPage.join('\n'));
    }

    return pages;
  }
}