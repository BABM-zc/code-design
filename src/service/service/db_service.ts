
import { IDBService } from '../api';
/**
 * 数据库服务
 * 基于IndexDBWrapper进行了再封装方便统一调用
 * 仓库地址：https://www.npmjs.com/package/indexdbwrapper
 * 由于数据库属于工具类服务，所以不挂载再codedesign对象上，用户需要再使用的地方自行注入。
 */
export class DBService implements IDBService {

    public create(name: string, version: number, onupgradeneeded: string): void {
        throw new Error('Method not implemented.');
    }
    public deleteDatabase(name: string): boolean {
        throw new Error('Method not implemented.');
    }
    public getDataBase(): IDBDatabase {
        throw new Error('Method not implemented.');
    }
    
}