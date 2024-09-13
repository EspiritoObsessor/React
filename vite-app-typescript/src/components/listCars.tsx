import Info from '../data/cars.json';

const listCars = () => {
    const regex = /^[A-Z]{3}-\d{4}$/;
    return (
        <div>
            <ul>
                {
                    Info.map((car, index) => {
                        return (
                            <li key={index}>
                                <h1>{index} - {car.carro}</h1>
                                <p>{regex.test(car.placa) ? car.placa : "PLACA INVÁLIDA"}</p>
                                <span>{car.qtdRodas}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default listCars;