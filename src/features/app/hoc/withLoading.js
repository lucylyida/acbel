import React, { Suspense } from "react"
import { fsc } from "../../../helper/fontColorHelper"
import { withMedia } from "react-media-query-hoc"

const withPageLoading = (PageComponent, props) => {
    // console.log("withloadinggggggggg/gggggggggggggggggggggggggggg")
    return (
        <Suspense fallback={<LoadingView />}>
            <PageComponent {...props} />
        </Suspense>
    )
}

export {
    withPageLoading,
}

const LoadingView = withMedia(
    ({ media }) => (
        <div style={{ position: "fixed", left: "50%", top: "50%" }}>
            <div style={{ position: "relative", left: "-50%", top: "-50%" }}>
                <span className="text-secondary" style={{ fontSize: fsc(media, 22), fontWeight: 100  }}><b>Loading...</b></span>
            </div>
        </div>
    )
)