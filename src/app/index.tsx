import React from "react";
import './styles/index.css';
import './styles/colors.css'
import { Button } from "../shared/components";
import { MainBanner } from "../entities/MainBanner/components/MainBanner";


const App = () => {
    return (
        <div>
        <MainBanner icon={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjb7-m-KE3QPsG3UaK4T8zrb849UKKT0DeA&usqp=CAU'} text={'Аудиокнига по дороге на работу и обратно, подарит вам почти месяц чтения за год'} />
        </div>
    )
}

export default App;