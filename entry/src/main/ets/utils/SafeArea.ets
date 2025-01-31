// utils/SafeArea.ets
import window from '@ohos.window';

export class SafeArea {
  static async getBottomHeight(context: undefined): Promise<number> {
    try {
      const win = await window.getLastWindow(context);
      const avoidArea = await win.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
      return avoidArea.bottomRect.height;
    } catch {
      return 34; // 默认安全高度
    }
  }
}