package com.dstz.sys.core.model;


import lombok.Data;
import java.io.Serializable;
@Data
public class Suplier implements Serializable{
        private Integer id;

        /**
         *
         */
        private String name;

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
        private String manager;

        private String defid;


        private static final long serialVersionUID = 1L;
    }

