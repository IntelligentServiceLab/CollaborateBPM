package com.ice.test;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ice.test.domain.Suplier;
import com.ice.test.mapper.SuplierMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@Slf4j
public class demoTest {
    @Autowired
    SuplierMapper suplierMapper;
    @Test
    public void suplierTest(){
        List<Suplier> supliers = suplierMapper.selectList(null);
        System.out.println(supliers);
    }
    @Test
    public void nameTest(){
        QueryWrapper<Suplier> queryWrapper=new QueryWrapper<>();
      queryWrapper.orderByAsc("price");
        List<Suplier> supliers = suplierMapper.selectList(queryWrapper);
        Suplier suplier = supliers.get(0);
        System.out.println(suplier);
    }
    @Test
    public void qulityTest(){
        QueryWrapper<Suplier> queryWrapper=new QueryWrapper<>();
        queryWrapper.eq("qulity","high");
        List<Suplier> supliers = suplierMapper.selectList(queryWrapper);
        System.out.println(supliers);
    }
}
