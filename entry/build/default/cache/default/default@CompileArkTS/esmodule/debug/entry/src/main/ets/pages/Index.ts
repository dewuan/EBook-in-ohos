if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface EBookReader_Params {
    currentPage?: number;
    totalPages?: number;
    fontSize?: number;
    isNightMode?: boolean;
    showSettings?: boolean;
    sampleContent?: string;
}
class EBookReader extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentPage = new ObservedPropertySimplePU(1, this, "currentPage");
        this.__totalPages = new ObservedPropertySimplePU(10, this, "totalPages");
        this.__fontSize = new ObservedPropertySimplePU(20, this, "fontSize");
        this.__isNightMode = new ObservedPropertySimplePU(false, this, "isNightMode");
        this.__showSettings = new ObservedPropertySimplePU(false
        // 简单示例内容
        , this, "showSettings");
        this.sampleContent = "这里是电子书内容示例...\n" +
            "（此处为模拟的长文本内容，实际使用时需要替换为真实内容）".repeat(50);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EBookReader_Params) {
        if (params.currentPage !== undefined) {
            this.currentPage = params.currentPage;
        }
        if (params.totalPages !== undefined) {
            this.totalPages = params.totalPages;
        }
        if (params.fontSize !== undefined) {
            this.fontSize = params.fontSize;
        }
        if (params.isNightMode !== undefined) {
            this.isNightMode = params.isNightMode;
        }
        if (params.showSettings !== undefined) {
            this.showSettings = params.showSettings;
        }
        if (params.sampleContent !== undefined) {
            this.sampleContent = params.sampleContent;
        }
    }
    updateStateVars(params: EBookReader_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentPage.purgeDependencyOnElmtId(rmElmtId);
        this.__totalPages.purgeDependencyOnElmtId(rmElmtId);
        this.__fontSize.purgeDependencyOnElmtId(rmElmtId);
        this.__isNightMode.purgeDependencyOnElmtId(rmElmtId);
        this.__showSettings.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentPage.aboutToBeDeleted();
        this.__totalPages.aboutToBeDeleted();
        this.__fontSize.aboutToBeDeleted();
        this.__isNightMode.aboutToBeDeleted();
        this.__showSettings.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentPage: ObservedPropertySimplePU<number>;
    get currentPage() {
        return this.__currentPage.get();
    }
    set currentPage(newValue: number) {
        this.__currentPage.set(newValue);
    }
    private __totalPages: ObservedPropertySimplePU<number>;
    get totalPages() {
        return this.__totalPages.get();
    }
    set totalPages(newValue: number) {
        this.__totalPages.set(newValue);
    }
    private __fontSize: ObservedPropertySimplePU<number>;
    get fontSize() {
        return this.__fontSize.get();
    }
    set fontSize(newValue: number) {
        this.__fontSize.set(newValue);
    }
    private __isNightMode: ObservedPropertySimplePU<boolean>;
    get isNightMode() {
        return this.__isNightMode.get();
    }
    set isNightMode(newValue: boolean) {
        this.__isNightMode.set(newValue);
    }
    private __showSettings: ObservedPropertySimplePU<boolean>;
    get showSettings() {
        return this.__showSettings.get();
    }
    set showSettings(newValue: boolean) {
        this.__showSettings.set(newValue);
    }
    // 简单示例内容
    private sampleContent: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.backgroundColor(this.isNightMode ? '#222' : '#f5f5f5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 状态栏
            Row.create();
            // 状态栏
            Row.padding(10);
            // 状态栏
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`进度: ${Math.round((this.currentPage / this.totalPages) * 100)}%`);
            Text.fontSize(16);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.currentPage}/${this.totalPages}`);
            Text.fontSize(16);
        }, Text);
        Text.pop();
        // 状态栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 阅读区域
            Scroll.create();
            // 阅读区域
            Scroll.height('75%');
            // 阅读区域
            Scroll.backgroundColor(this.isNightMode ? '#333' : '#fff');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.sampleContent);
            Text.fontSize(this.fontSize);
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(this.fontSize * 1.5);
            Text.padding(20);
        }, Text);
        Text.pop();
        // 阅读区域
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 控制区域
            Row.create();
            // 控制区域
            Row.justifyContent(FlexAlign.SpaceAround);
            // 控制区域
            Row.width('100%');
            // 控制区域
            Row.padding(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('上一页');
            Button.onClick(() => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('设置');
            Button.onClick(() => {
                this.showSettings = !this.showSettings;
            });
            Button.margin(10);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('下一页');
            Button.onClick(() => {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                }
            });
        }, Button);
        Button.pop();
        // 控制区域
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 设置面板
            if (this.showSettings) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.padding(20);
                        Column.backgroundColor('#f0f0f0');
                        Column.width('100%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('字体大小: ');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('-');
                        Button.onClick(() => {
                            if (this.fontSize > 12) {
                                this.fontSize -= 2;
                            }
                        });
                        Button.margin(5);
                    }, Button);
                    Button.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.fontSize.toString());
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('+');
                        Button.onClick(() => {
                            if (this.fontSize < 30) {
                                this.fontSize += 2;
                            }
                        });
                        Button.margin(5);
                    }, Button);
                    Button.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.margin({ top: 10 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('夜间模式: ');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Toggle.create({ type: ToggleType.Checkbox, isOn: this.isNightMode });
                        Toggle.onChange((isOn) => {
                            this.isNightMode = isOn;
                        });
                    }, Toggle);
                    Toggle.pop();
                    Row.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "EBookReader";
    }
}
registerNamedRoute(() => new EBookReader(undefined, {}), "", { bundleName: "com.example.reading", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
