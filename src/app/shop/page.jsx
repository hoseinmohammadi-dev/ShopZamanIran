import ClientStore from "../component/ClientStore";
import getData from "../services/getData";

export default async function StorePage() {
    const data = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products");
    return <ClientStore initialData={data} />;
}
