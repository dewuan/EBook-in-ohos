// utils/FileUtils.ets
/// <reference path="../model/FileTypes.ets" />
import picker from '@ohos.file.picker';

// 定义文件类型接口
interface FileResult {
  name: string;
  content: string;
}

// 定义文件元数据接口
interface FileMeta {
  name: string;
  uri: string;
  type: string;
}

export class FileUtils {
  static async loadTextFile(): Promise<FileResult> {
    try {
      // 显式声明返回类型
      const file: FileMeta = await picker.selectFile({
        type: 'text/plain'
      }) as FileMeta;

      // 显式声明内容类型
      const content: string = await file.readText();

      return {
        name: file.name,
        content: content
      };
    } catch (error) {
      console.error('FileUtils.loadTextFile error:', error);
      return {
        name: '',
        content: ''
      };
    }
  }
}