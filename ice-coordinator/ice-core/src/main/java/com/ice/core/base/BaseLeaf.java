package com.ice.core.base;

import com.ice.common.enums.ErrorHandleEnum;
import com.ice.common.enums.NodeRunStateEnum;
import com.ice.common.exception.NodeException;
import com.ice.core.context.IceContext;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.extern.slf4j.Slf4j;

/**
 * @author zjn
 */
@Data
@Slf4j
@EqualsAndHashCode(callSuper = true)
public abstract class BaseLeaf extends BaseNode {

    /*
     * default SHUT_DOWN
     */
    private ErrorHandleEnum iceErrorHandleEnum = ErrorHandleEnum.SHUT_DOWN;

    /*
     * process node
     * @return process result
     */
    @Override
    protected NodeRunStateEnum processNode(IceContext cxt) {
        try {
            return doLeaf(cxt);
        } catch (Exception e) {
            switch (iceErrorHandleEnum) {
                case CONTINUE_NONE:
                    if (this.isIceNodeDebug()) {
                        log.error("error occur in {} handle with none", this.findIceNodeId());
                    }
                    return NodeRunStateEnum.NONE;
                case CONTINUE_FALSE:
                    if (this.isIceNodeDebug()) {
                        log.error("error occur in {} handle with false", this.findIceNodeId());
                    }
                    return NodeRunStateEnum.FALSE;
                case CONTINUE_TRUE:
                    if (this.isIceNodeDebug()) {
                        log.error("error occur in {} handle with true", this.findIceNodeId());
                    }
                    return NodeRunStateEnum.TRUE;
                case SHUT_DOWN:
                    if (this.isIceNodeDebug()) {
                        log.error("error occur in {} handle with shut down", this.findIceNodeId());
                    }
                    throw new NodeException(this.findIceNodeId(), e);
                case SHUT_DOWN_STORE:
                    if (this.isIceNodeDebug()) {
                        log.error("error occur in {} handle with shut down store", this.findIceNodeId());
                    }
                    //TODO store
                    throw new NodeException(this.findIceNodeId(), e);
                default:
                    throw e;
            }
        }
    }

    /*
     * process leaf
     */
    protected abstract NodeRunStateEnum doLeaf(IceContext cxt);
}
