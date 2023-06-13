package com.ice.test.service;

import com.ice.test.domain.Company;

public interface CompanyService {

    /**
     * 注册公司用户
     * @param company
     * @return
     */
    int registerUser(Company company);

    /**
     * 验证账号是否已经注册成功
     * @param account,password
     * @return
     */
    Company getUser(String account, String password);

    /**
     * 根据账号名称查询账号所属公司名称
     * @param account
     * @return
     */
    String getCnameByAccount(String account);
}
