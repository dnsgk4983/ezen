import logoImg from '../assets/soup.jpg';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import { useContext } from 'react';

export default function Header() { 
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    // 총 아이템은 장바구니 context를 사용하여
    // 장바구니 목록을 가져옵니다. 초기값 0으로 총 항목 카운트
    // reduce 함수가 자바스크립트에서 합산 기능을 수행합니다.
    // reduce 함수는 초기값이 필요합니다.
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logoImg} alt="레스토랑" />
                <h1>음식점</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}