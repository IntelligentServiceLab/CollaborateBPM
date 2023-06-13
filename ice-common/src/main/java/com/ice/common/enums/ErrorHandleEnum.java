package com.ice.common.enums;

import java.util.HashMap;
import java.util.Map;

/**
 * @author zjn
 * leaf error handle method
 * default shutdown and not store
 */
public enum ErrorHandleEnum {
    /*
     * continue process with return none
     */
    CONTINUE_NONE((byte) 0),

    /*
     * continue process with return false
     */
    CONTINUE_FALSE((byte) 1),

    /*
     * continue process with return true
     */
    CONTINUE_TRUE((byte) 2),

    /*
     * shut down process
     */
    SHUT_DOWN((byte) 3),

    /*
     * shut down process with store
     */
    SHUT_DOWN_STORE((byte) 4);

    private static final Map<Byte, ErrorHandleEnum> MAP = new HashMap<>();

    static {
        for (ErrorHandleEnum enums : ErrorHandleEnum.values()) {
            MAP.put(enums.getType(), enums);
        }
    }

    private final byte type;

    ErrorHandleEnum(byte type) {
        this.type = type;
    }

    public static ErrorHandleEnum getEnum(byte type) {
        return MAP.get(type);
    }

    public byte getType() {
        return type;
    }
}
