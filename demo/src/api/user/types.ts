//用户信息 类型
export interface MenuDataType {
    icon: string;
    menus: Menu[];
    roles: string[];
    username: string;
}

export interface Menu {
    createTime: string;
    hidden: number;
    icon: string;
    id: number;
    level: number;
    name: string;
    parentId: number;
    sort: number;
    title: string;
}