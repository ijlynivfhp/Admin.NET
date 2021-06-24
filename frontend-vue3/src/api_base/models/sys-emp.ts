/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET通用权限管理平台
 * 前后端分离架构，开箱即用，紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 员工表
 * @export
 * @interface SysEmp
 */
export interface SysEmp {
    /**
     * 用户Id
     * @type {number}
     * @memberof SysEmp
     */
    id?: any;
    /**
     * 工号
     * @type {string}
     * @memberof SysEmp
     */
    jobNum?: any | null;
    /**
     * 机构Id
     * @type {number}
     * @memberof SysEmp
     */
    orgId?: any;
    /**
     * 机构名称
     * @type {string}
     * @memberof SysEmp
     */
    orgName?: any | null;
    /**
     * 多对多（职位）
     * @type {Array&lt;SysPos&gt;}
     * @memberof SysEmp
     */
    sysPos?: any | null;
    /**
     * 多对多中间表（员工-职位）
     * @type {Array&lt;SysEmpPos&gt;}
     * @memberof SysEmp
     */
    sysEmpPos?: any | null;
}