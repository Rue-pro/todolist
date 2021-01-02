import React from "react";
import { TaskStyled } from "./styles";
import { Badge } from "../../common/Badge/Badge";
import { Checkbox } from "../../common/Checkbox/Checkbox";
import { Text } from "../../common/Text/Text";

export const Task = (props:any) => {
    return (
        <TaskStyled>
            <Checkbox />
            <Text>{props.text}</Text>
            <Badge>{props.status}</Badge>
        </TaskStyled>
    )
}