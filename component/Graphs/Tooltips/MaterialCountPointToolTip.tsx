import {PointTooltipProps} from "@nivo/line";
import ContentDiv from "../../pageComponents/ContentDiv";
import {HistoryContext} from "../../../pages/history/[id]";
import {useContext} from "react";
import {LoadingComponent} from "../../App Components/LoadingComponent";

export function MaterialCountPointToolTip(props: PointTooltipProps) {
    const history = useContext(HistoryContext);
    const date = new Date(props.point.data.x);

    if (history === undefined) {
        return <LoadingComponent/>
    }

    return (
        <>
            <ContentDiv sides={true}>
                <p>
                    <>Count: {props.point.data.y} {history.name} <br/> {date.toLocaleString()}</>
                </p>
            </ContentDiv>
        </>
    )
}