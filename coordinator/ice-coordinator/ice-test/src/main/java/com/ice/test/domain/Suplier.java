package com.ice.test.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 
 * @TableName user_suplier
 */
@TableName(value ="user_suplier")
@Data
public class Suplier implements Serializable {
    /**
     * 
     */
    private Integer id;

    /**
     * 
     */
    private String name;//公司账号

    private String area;

    /**
     * 
     */
    private Double price;

    /**
     * 
     */
    private String qulity;

    /**
     * 
     */
    private String telephone;

    /**
     * 
     */
    private String email;

    /**
     * 
     */
    private String manager;//处理人姓名

    /**
     * 
     */
    private String defid;

    private String product;

    private String cname;//公司名称

    private String weichat;//处理人微信

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        Suplier other = (Suplier) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getPrice() == null ? other.getPrice() == null : this.getPrice().equals(other.getPrice()))
            && (this.getQulity() == null ? other.getQulity() == null : this.getQulity().equals(other.getQulity()))
            && (this.getTelephone() == null ? other.getTelephone() == null : this.getTelephone().equals(other.getTelephone()))
            && (this.getEmail() == null ? other.getEmail() == null : this.getEmail().equals(other.getEmail()))
            && (this.getManager() == null ? other.getManager() == null : this.getManager().equals(other.getManager()))
            && (this.getDefid() == null ? other.getDefid() == null : this.getDefid().equals(other.getDefid()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getPrice() == null) ? 0 : getPrice().hashCode());
        result = prime * result + ((getQulity() == null) ? 0 : getQulity().hashCode());
        result = prime * result + ((getTelephone() == null) ? 0 : getTelephone().hashCode());
        result = prime * result + ((getEmail() == null) ? 0 : getEmail().hashCode());
        result = prime * result + ((getManager() == null) ? 0 : getManager().hashCode());
        result = prime * result + ((getDefid() == null) ? 0 : getDefid().hashCode());
        return result;
    }

}