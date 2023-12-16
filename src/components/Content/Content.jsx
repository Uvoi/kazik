import React from 'react';
import Games from '../../pages/Games/Games';
import Home from '../../pages/Home/Home';
import Profile from '../../pages/Profile/Profile';
import Promo from '../../pages/Promo/Promo';
import Contact from '../../pages/Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GamePage from '../../pages/GamePage/GamePage';
import ShellGame from '../../pages/gamesFolder/ShellGame/ShellGame';
import GuessingGame from '../../pages/gamesFolder/GuessingGame/GuessingGame';
import SlotsGame from '../../pages/gamesFolder/SlotsGame/SlotsGame';
import RouletteGame from '../../pages/gamesFolder/RouletteGame/RouletteGame';
import ScratchGame from '../../pages/gamesFolder/ScratchGame/ScratchGame';
import RouletteSliderGame from '../../pages/gamesFolder/RouletteSliderGame/RouletteSliderGame';
import SlotsGameChristmas from '../../pages/gamesFolder/SlotsGame/themes/SlotsGameChristmas';
import ShellGameChristmas from '../../pages/gamesFolder/ShellGame/themes/ShellGameChristmas';
import ScratchGameChristmas from '../../pages/gamesFolder/ScratchGame/themes/ScratchGameChristmas';

const Content = ({User, Money, childUpdate})=>
{
    return(
        <div id='Main_content' style={{ marginTop: '10vh', marginBottom: '10vh' }}>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/games' element={<Games />} />
                    <Route exact path='/promo' element={<Promo curMoney={Money} ParentUpdate={childUpdate}/>} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/profile' element={<Profile User={User} ParentUpdate={childUpdate}/>} />
                    <Route exact path='/game' element={<GamePage />} />
                    <Route exact path='/games/shellgame' element={<ShellGame curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/guessinggame' element={<GuessingGame curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/slotsgame' element={<SlotsGame curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/roulettegame' element={<RouletteGame curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/scratchgame' element={<ScratchGame curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/rouletteslidergame' element={<RouletteSliderGame curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/SlotsGameChristmas' element={<SlotsGameChristmas curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/ShellGameChristmas' element={<ShellGameChristmas curMoney={Money} ParentUpdate={childUpdate} />} />
                    <Route exact path='/games/ScratchGameChristmas' element={<ScratchGameChristmas curMoney={Money} ParentUpdate={childUpdate} />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Content;