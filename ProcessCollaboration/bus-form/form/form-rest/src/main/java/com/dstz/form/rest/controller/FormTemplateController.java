package com.dstz.form.rest.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dstz.base.api.aop.annotion.CatchErr;
import com.dstz.base.api.query.QueryFilter;
import com.dstz.base.api.response.impl.ResultMsg;
import com.dstz.base.core.id.IdUtil;
import com.dstz.base.core.util.StringUtil;
import com.dstz.base.db.model.page.PageResult;
import com.dstz.base.rest.ControllerTools;
import com.dstz.base.rest.util.RequestUtil;
import com.dstz.form.manager.FormTemplateManager;
import com.dstz.form.model.FormTemplate;

/**
 * <pre>
 * 描述：自定义对话框管理
 * </pre>
 */
@RestController
@RequestMapping("/form/formTemplate/")
public class FormTemplateController extends ControllerTools {
    @Autowired
    FormTemplateManager formTemplateManager;

    /**
     * <pre>
     * formTemplateEdit.html的save后端
     * </pre>
     *
     * @param request
     * @param response
     * @param formTemplate
     * @throws Exception
     */
    @RequestMapping("save")
    @CatchErr(write2response = true, value = "保存自定义对话框失败")
    public ResultMsg<FormTemplate> save(HttpServletRequest request, HttpServletResponse response, @RequestBody FormTemplate formTemplate) throws Exception {
        if (StringUtil.isEmpty(formTemplate.getId())) {
            formTemplate.setEditable(true);// 页面新增的能编辑
            formTemplate.setId(IdUtil.getSuid());
            formTemplateManager.create(formTemplate);
        } else {
            formTemplateManager.update(formTemplate);
        }
        return getSuccessResult(formTemplate, "保存自定义对话框成功");
    }

    /**
     * <pre>
     * 获取formTemplate的后端
     * 目前支持根据id 获取formTemplate
     * </pre>
     *
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping("getObject")
    @CatchErr(write2response = true, value = "获取formTemplate异常")
    public ResultMsg<FormTemplate> getObject(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String id = RequestUtil.getString(request, "id");
        String key = RequestUtil.getString(request, "key");
        FormTemplate formTemplate = null;
        if (StringUtil.isNotEmpty(id)) {
            formTemplate = formTemplateManager.get(id);
        } else if (StringUtil.isNotEmpty(key)) {
            formTemplate = formTemplateManager.getByKey(key);
        }

        return getSuccessResult(formTemplate);
    }

    /**
     * <pre>
     * list页的后端
     * </pre>
     *
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @RequestMapping("listJson")
    @ResponseBody
    public PageResult listJson(HttpServletRequest request, HttpServletResponse response) throws Exception {
        QueryFilter queryFilter = getQueryFilter(request);
        List<FormTemplate> list = formTemplateManager.query(queryFilter);
        return new PageResult(list);
    }

    /**
     * <pre>
     * 批量删除
     * </pre>
     *
     * @param request
     * @param response
     * @throws Exception
     */
    @RequestMapping("remove")
    @CatchErr(write2response = true, value = "删除表单模板失败")
    public ResultMsg<String> remove(HttpServletRequest request, HttpServletResponse response) throws Exception {
        String[] aryIds = RequestUtil.getStringAryByStr(request, "id");
        formTemplateManager.removeByIds(aryIds);
        return getSuccessResult( "删除表单模板成功");
    }

    /**
     * <pre>
     * 初始化模板
     * </pre>
     *
     * @param request
     * @param response
     * @throws Exception
     */
    @RequestMapping("initTemplate")
    @CatchErr(write2response = true, value = "初始化模板失败")
    public ResultMsg<String> initTemplate(HttpServletRequest request, HttpServletResponse response) throws Exception {
        formTemplateManager.initAllTemplate();
        return getSuccessResult("初始化模板成功");
    }
}
