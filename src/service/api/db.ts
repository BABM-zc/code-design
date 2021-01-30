
/**
 * 数据存储服务
 */
export interface IDBService {
    /**
     * 创建数据库
     * @param name 数据库名
     * @param version 数据库版本
     * @param onupgradeneeded 数据库更新方法
     */
    create(name: string, version: number, onupgradeneeded: string): void;
    /**
     * 删除数据库
     * @param name 数据库名称
     */
    deleteDatabase(name: string): boolean;
    /**
     * 获取到对应的数据库
     */
    getDataBase(): IDBDatabase;
}