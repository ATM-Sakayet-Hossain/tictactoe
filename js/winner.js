const Winner = (props) => {
    const confetti = [], rays = [];
    for (let i=1; i<=25; i++) { 
      confetti.push(<div key={i} className={'Confetti_' + i}></div>) }
    for (let i=0; i<9; i++) { rays.push(<div key={i}></div>) }

    return (
        <div className = 'Winner_container'>
            <div className = 'Rays_container'>
                {rays}
            </div>
            <div className ='Podium_Container'>
                <div className ='Podium'>
                    <div>2</div>
                    <div>1</div>
                    <div>3</div>
                </div>
            </div>
            <div className = 'Winner O' >
                <div></div>
            </div>
            <div className = 'Confetti'>
                {confetti}
            </div>
        </div>
    );
}

ReactDOM.render(<Winner/>, document.getElementById('root'));