package com.ice.test.mapper;

import com.ice.test.domain.Apply;

import java.util.List;

public interface ApplyMapper {

    int insertApply(Apply apply);

    List<Apply> selectApplyListByPublisher(String publisher);

    Apply selectApplyListByTitleAndStatus(String title,String applyStatus);

    List<Apply> selectApplyListByTitle(String title);

    int updateApplyStatusById(Integer id,String applyStatus);

    /**
     * 查询公司所有申请的记录
     * @param account
     * @return
     */
    List selectApplyListByAccount(String account);

    /**
     * 根据任务名主键删掉任务申请记录
     *
     * @param title
     * @return
     */
    int deleteApplyByTitle(String title);


}
