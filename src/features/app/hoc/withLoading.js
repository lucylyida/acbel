import React, { Suspense } from "react"

const withPageLoading = (PageComponent, props) => {
    return (
        <Suspense fallback={<LoadingView />}>
            <PageComponent {...props} />
        </Suspense>
    )
}

export {
    withPageLoading,
}

const LoadingView = () => (
    <div style={{ position: "fixed", left: "50%", top: "50%" }}>
        <div style={{ position: "relative", left: "-50%", top: "-50%" }}>
            <span className="h1 text-secondary"><b>Loading...</b></span>
        </div>
    </div>
)