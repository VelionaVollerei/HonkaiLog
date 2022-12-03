import {PointTooltipProps} from "@nivo/line";
import FramedDiv from "../../Layout/FramedDiv";
import {useMaterialWithLogsFromRouter} from "../../../features/Material/hooks/useMaterialWithLogsFromRouter";
import {LoadingComponent} from "../../UI Components/Loading Icons/LoadingComponent";

export function MaterialLogPointToolTip(props: PointTooltipProps) {
    // Get the material
    const material = useMaterialWithLogsFromRouter();
    if (material === undefined) return <LoadingComponent subtext={"Preparing material data..."}/>

    const date = new Date(props.point.data.x);

    return (
        <>
            <FramedDiv sides={true}>
                <p>
                    <>Count: {props.point.data.y} {material.name} <br/> {date.toLocaleString()}</>
                </p>
            </FramedDiv>
        </>
    )
}