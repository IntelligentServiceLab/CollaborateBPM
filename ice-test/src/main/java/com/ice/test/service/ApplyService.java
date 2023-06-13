package com.ice.test.service;

import com.ice.test.domain.Apply;

import java.util.List;

public interface ApplyService {

    int saveApply(Apply apply);

    List<Apply> getApplyListByPublisher(String publisher);

    Apply getApplyListByTitleAndStatus(String title, String applyStatus);

    List<Apply> getApplyListByTitle(String title);

    int updateApplyStatusById(Integer id, String applyStatus);

    /**
     * 查询公司所有申请的记录
     *
     * @param account
     * @return
     */
    List<Apply> getApplyListByAccount(String account);

    /**
     * 根据任务名主键删掉任务申请记录
     *
     * @param title
     * @return
     */
    int deleteApply(String title);
}
