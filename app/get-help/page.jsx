import FeatureInProgress from "../../frontend/components/ui/FeatureInProgress";

export default function page() {
    return (
        <div className={"m-5 flex flex-col"}>
            <h1 className={"m-5"}>You're now in get-help page</h1>
            <FeatureInProgress  />
        </div>
    )
}