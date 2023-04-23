async function getData() {
    const res = await fetch("https://fantasy.premierleague.com/api/bootstrap-static/");

    return res.json();
}

export default async function Secret() {
    const data = await getData();

    const thing = data.total_players;

    return (
        <>
        {thing}
        </>
    )
}