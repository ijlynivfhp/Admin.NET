﻿namespace Dilon.Core
{
    /// <summary>
    /// http请求类型
    /// </summary>
    public enum RequestTypeEnum
    {
        /// <summary>
        /// 无
        /// </summary>
        None = 0,

        /// <summary>
        /// GET请求
        /// </summary>
        Get = 1,

        /// <summary>
        /// POST请求
        /// </summary>
        Post = 2,

        /// <summary>
        /// PUT请求
        /// </summary>
        Put = 3,

        /// <summary>
        /// DELETE请求
        /// </summary>
        Delete = 4
    }
}