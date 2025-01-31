//
// Created on 2025/1/31.
//
// Node APIs are not fully supported. To solve the compilation error of the interface cannot be found,
// please include "napi/native_api.h".

#ifndef READING_FILETYPES_H
#define READING_FILETYPES_H
// model/FileTypes.ets
export interface FileMeta {
  name: string;
  uri: string;
  type: string;
}

declare interface File {
  readText(): Promise<string>;
}
#endif //READING_FILETYPES_H
