import {LoadingComponent} from "../../../component/App Components/PageLoadingComponent";
import {Container} from "react-bootstrap";
import {PageTitle} from "../../../component/pageComponents/Theme/Theme";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorFallback, ErrorHandler} from "../../../component/App Components/ErrorFallback";
import {MaterialLogsManager} from "../components/MaterialLogsManager/MaterialLogsManager";
import {MaterialLogsAnalytics} from "../components/MaterialLogsAnalytics/MaterialLogsAnalytics";
import {GachaData} from "../../Gacha/components/GachaData";
import {useMaterialWithLogsFromRouter} from "../hooks/useMaterialWithLogsFromRouter";


export function MaterialInfoPageContent() {
    // Get the material
    const material = useMaterialWithLogsFromRouter();
    if (material === undefined) return <LoadingComponent subtext={"Preparing material data..."}/>

    return <Container>
        <PageTitle title={material.name + " history"}></PageTitle>

        <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
            <MaterialLogsManager/>
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
            <MaterialLogsAnalytics/>
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback} onError={ErrorHandler}>
            <GachaData/>
        </ErrorBoundary>
    </Container>
}