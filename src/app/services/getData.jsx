export default async function getData(url) {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Failed to get data: ${res.status}`);
    }

    const data = await res.json();
    return data;
}
