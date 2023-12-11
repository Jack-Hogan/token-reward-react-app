export default function Header(props){

    const {countCartItems} = props;
    return <div className="row center block">
        <div>
            <a href="#/"><h2><img src="images/RGB.Beyond.Logo.Blue.Preferred.2023-10-12.png" className='logo' alt="Beyond Logo"></img></h2></a>
        </div>
        <div>
            <a href="#/cart">Cart{countCartItems?
            <button className="badge">{countCartItems}</button>:('')}</a> <a href="#/signin">Sign In</a>

        </div>
    </div>
}