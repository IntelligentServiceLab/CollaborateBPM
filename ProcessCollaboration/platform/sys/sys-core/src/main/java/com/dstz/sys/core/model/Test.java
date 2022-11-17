package com.dstz.sys.core.model;

public class Test {
    private String name;
    private String sex;

    public Test() {
    }

    public String getName() {
        return this.name;
    }

    public String getSex() {
        return this.sex;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public void setSex(final String sex) {
        this.sex = sex;
    }

    public boolean equals(final Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof Test)) {
            return false;
        } else {
            Test other = (Test)o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                Object this$name = this.getName();
                Object other$name = other.getName();
                if (this$name == null) {
                    if (other$name != null) {
                        return false;
                    }
                } else if (!this$name.equals(other$name)) {
                    return false;
                }

                Object this$sex = this.getSex();
                Object other$sex = other.getSex();
                if (this$sex == null) {
                    if (other$sex != null) {
                        return false;
                    }
                } else if (!this$sex.equals(other$sex)) {
                    return false;
                }

                return true;
            }
        }
    }

    protected boolean canEqual(final Object other) {
        return other instanceof Test;
    }



    public String toString() {
        return "Test(name=" + this.getName() + ", sex=" + this.getSex() + ")";
    }
}
