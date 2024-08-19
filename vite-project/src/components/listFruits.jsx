    const fruits = [
        {nome: "Abaxota", fruta: "Pera", isFruit: true, id: 1},
        {nome: "Peranja", fruta: "Caqui", isFruit: true, id: 2},
        {nome: "Amango-Doce", fruta: "Laticíneo", isFruit: true, id: 3},
        {nome: "A-Fruta", fruta: "Legumes", isFruit: false, id: 4},
    ];

    const listFruits = () => {
        const frutas = fruits.map (fruit => 
            <li
                key={fruit.id}
                style={{
                    color: fruit.isFruit ? 'red' : 'green'
                }} 
            >
                <h2>{fruit.nome}</h2>
                <p>{fruit.fruta}</p>
            </li>
        )

        return (
            <ul>{frutas}</ul>
        )
    }

    export default listFruits