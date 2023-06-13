package com.ice.test.mapper;

import com.ice.test.domain.Company;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface CompanyMapper {

    int insertCompany(Company company);

    Company selectUser(String account, String password);

    String selectCnameByAccount(String account);
}
