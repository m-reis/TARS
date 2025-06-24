import FredGrugPage from "@/app/components/fredGrugPage";

export default async function Home(){
    await new Promise(resolve => setTimeout(resolve, 5000));

    return (
        <FredGrugPage />
    );
}