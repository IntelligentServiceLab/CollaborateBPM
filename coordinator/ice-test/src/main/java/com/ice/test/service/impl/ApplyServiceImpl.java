package com.ice.test.service.impl;

import com.ice.test.domain.Apply;
import com.ice.test.mapper.ApplyMapper;
import com.ice.test.service.ApplyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplyServiceImpl implements ApplyService {

    private final ApplyMapper applyMapper;

    @Override
    public int saveApply(Apply apply) {
        return applyMapper.insertApply(apply);
    }

    @Override
    public List<Apply> getApplyListByPublisher(String publisher) {
        return applyMapper.selectApplyListByPublisher(publisher);
    }

    @Override
    public Apply getApplyListByTitleAndStatus(String title, String applyStatus) {
        return applyMapper.selectApplyListByTitleAndStatus(title,applyStatus);
    }

    @Override
    public List<Apply> getApplyListByTitle(String title) {
        return applyMapper.selectApplyListByTitle(title);
    }

    @Override
    public int updateApplyStatusById(Integer id, String applyStatus) {
        return applyMapper.updateApplyStatusById(id,applyStatus);
    }

    @Override
    public List getApplyListByAccount(String account) {
        return applyMapper.selectApplyListByAccount(account);
    }

    @Override
    public int deleteApply(String title) {
        return applyMapper.deleteApplyByTitle(title);
    }
}
