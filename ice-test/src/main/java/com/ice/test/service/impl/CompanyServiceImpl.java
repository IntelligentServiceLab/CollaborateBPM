package com.ice.test.service.impl;

import com.ice.test.domain.Company;
import com.ice.test.mapper.CompanyMapper;
import com.ice.test.service.CompanyService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Resource
    CompanyMapper companyMapper;
    @Override
    public int registerUser(Company company) {
        return companyMapper.insertCompany(company);
    }

    @Override
    public Company getUser(String account, String password) {
        return companyMapper.selectUser(account,password);
    }

    @Override
    public String getCnameByAccount(String account) {
        return companyMapper.selectCnameByAccount(account);
    }
}
