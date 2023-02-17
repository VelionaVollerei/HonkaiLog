import {GachaBanner} from "@/utils/entities/Gacha/GachaBanner";
import {FadingIn} from "@/components/Animators/FadingIn";
import {CenterContent} from "@/components/Layouts/CenterContent";
import {GachaBannerSummary} from "@/app/gacha/gachaBannerSummary";
import {MaterialQuantity} from "@/utils/entities/Material/MaterialQuantity";
import dayjs from "dayjs";
import {FOCABanner} from "@/app/gacha/FOCABanner";
import {PageTitle} from "@/components/UI/Theme/PageTitle";
import {MaterialORM} from "@/prisma/ORMs/MaterialORM";
import {getServerUser} from "@/lib/NextAuth/GetSession";

export default async function Page() {
    const period = {start: dayjs().add(-35, "day"), end: dayjs()};
    const historyCalculator = await MaterialORM.getMaterialHistoryCalculator("Crystal", (await getServerUser()).id, {period})

    const pullCost = new MaterialQuantity(historyCalculator.material, 280);
    const expaBannerRaw = new GachaBanner("Expa Banner", 100, 1, pullCost)
    const currentInventory = new MaterialQuantity(historyCalculator.material, historyCalculator.getCurrentCount())

    return <>
        <FadingIn duration={500} className={"size-inherit"} style={{overflow: "auto"}}>
            <CenterContent>
                <PageTitle title={"Gacha"}/>

                <GachaBannerSummary bannerJSON={expaBannerRaw.export()}
                                    currentInventory={currentInventory.toJSON()}
                                    materialCalculator={historyCalculator.toJSON()}/>

                <FOCABanner pullCost={pullCost.toJSON()}
                            currentInventory={currentInventory.toJSON()}
                            materialCalculator={historyCalculator.toJSON()}/>
            </CenterContent>
        </FadingIn>
    </>
}