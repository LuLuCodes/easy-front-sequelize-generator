/*
 * @Author: leyi leyi@myun.info
 * @Date: 2023-02-02 14:47:58
 * @LastEditors: leyi leyi@myun.info
 * @LastEditTime: 2023-02-02 15:54:43
 * @FilePath: /easy-front-sequelize-generator/src/config/IConfig.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Options } from 'sequelize';
import { ESLint } from 'eslint';

export type TransformCase =
  | 'UPPER'
  | 'LOWER'
  | 'UNDERSCORE'
  | 'CAMEL'
  | 'PASCAL'
  | 'CONST';

export enum TransformTarget {
  MODEL = 'model',
  COLUMN = 'column',
}

export type TransformMap = {
  [key in TransformTarget]: TransformCase;
};

export type AliasFieldsMap = {
  [key: string]: string;
};

export type TransformFn = (value: string, target: TransformTarget) => string;

export const TransformCases = new Set<TransformCase>([
  'UPPER',
  'LOWER',
  'UNDERSCORE',
  'CAMEL',
  'PASCAL',
  'CONST',
]);

export interface IConfigMetadata {
  schema?: 'public' | string; // Postgres only
  tables?: string[];
  skipTables?: string[];
  indices?: boolean;
  timestamps?: boolean;
  paranoid?: boolean;
  case?: TransformCase | TransformMap | TransformFn;
  aliasFields?: AliasFieldsMap;
  associationsFile?: string;
  noViews?: boolean;
}

export interface IConfigOutput {
  clean?: boolean; // clean output dir before build
  outDir: string; // output directory
}

export interface IConfig {
  connection: Options;
  metadata?: IConfigMetadata;
  output: IConfigOutput;
  lintOptions?: ESLint.Options;
  strict?: boolean;
}
