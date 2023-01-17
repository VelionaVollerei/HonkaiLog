import {useRouter} from "next/router";
import {MaterialIDContext} from "../../../features/Material/contexts/MaterialIDContext";
import {Page} from "../../../layout/components/page";
import {Fade} from "react-awesome-reveal";
import {MaterialInfoPageContent} from "../../../features/Material/pages/MaterialInfoPageContent";
import {ParsedUrlQuery} from "querystring";

/** A page to display information about a logs and create logs logs*/
export default function MaterialInfo() {
    // Get the logs ID
    const router = useRouter()
    const query: ParsedUrlQuery = router.query;
    console.log("Query from page:", query)

    let id_string = query.id;

    if (typeof id_string !== "string") {
        id_string = "1"; // TODO: Remove failsafe and actually tell that it's not valid
    }

    return <>
        <Page userNeeded={true} useNavbar={true}>
            <MaterialIDContext.Provider value={parseInt(id_string)}>
                <Fade>
                    <MaterialInfoPageContent></MaterialInfoPageContent>
                </Fade>
            </MaterialIDContext.Provider>
        </Page>
    </>
}

