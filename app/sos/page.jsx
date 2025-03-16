import FeatureInProgress from "../components/ui/FeatureInProgress";

export default function page() {
    return (
        <div className={"m-5 flex flex-col"}>
            <h1 className={"m-5"}>You're now in SOS page</h1>
            <FeatureInProgress  />
        </div>
    )
}