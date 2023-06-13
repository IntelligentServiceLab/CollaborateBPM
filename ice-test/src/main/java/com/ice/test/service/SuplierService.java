package com.ice.test.service;

import com.ice.test.domain.Suplier;
import com.baomidou.mybatisplus.extension.service.IService;

/**
* @author 18385
* @description 针对表【user_suplier】的数据库操作Service
* @createDate 2022-09-22 13:25:46
*/
public interface SuplierService extends IService<Suplier> {

    void insertSuplier(Suplier suplier);

}
