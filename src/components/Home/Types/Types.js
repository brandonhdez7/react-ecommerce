import React, {Component} from 'react';
import './Types.scss'


class Types extends Component{
    render(){
        return(
            <div className="types">
                <h2>Types Of Coffee</h2>
                <div className="container">
                    <div className="bar">
                    <div className="bold"><h3>Bold</h3></div>
                    <div className="circle top"></div>
                    <div className="circle middle"></div>
                    <div className="circle bottom"></div>
                    <div className="creamy"><h3>Creamy</h3></div>
                    </div>
                    <div className="coffee-cups">
                    <div className="cup-small doppio">
                        <div className="handle"></div>
                    </div>
                    <div className="cup americano">
                        <div className="handle"></div>
                    </div>
                    <div className="cup-small macchiato">
                        <div className="handle"></div>
                    </div>
                    <div className="cup-small flatwhite">
                        <div className="handle"></div>
                    </div>
                    <div className="cup cappuccino">
                        <div class="handle"></div>
                    </div>
                    <div className="cup-long latte">
                        <div className="handle"></div>
                        <div className="bottom-handle"></div>
                    </div>
                    </div>
                    <div className="info">
                    <div className="first">
                        <h3>doppio</h3>
                        <p>Double shot of espresso. Straight.</p>
                    </div>
                    <div className="second">
                        <h3>americano</h3>
                        <p>Shots of espresso diluted with water</p>
                    </div>
                    <div className="third">
                        <h3>Macchiato</h3>
                        <p>Espresso with a dash of frothy foamed milk.</p>
                    </div>
                    <div className="fourth">
                        <h3>Flat White</h3>
                        <p>Double shot of espresso with steamed milk.</p>
                    </div>
                    <div className="fifth">
                        <h3>Cappuccino</h3>
                        <p>Double shot of espresso topped with an airy thick layer of foamed milk.</p>
                    </div>
                    <div className="sixth">
                        <h3>Caffe Latte</h3>
                        <p>A shot of espresso in steamed milk lightly topped with foam.</p>
                    </div>

                    </div>
                    </div>

                    <div className="key">
                    <div className="circle espresso"><p className="small">espresso</p></div>
                    <div className="circle milk"><p className="small">steamed milk</p></div>
                    <div className="circle foam"><p className="small">milk foam</p></div>
                    <div className="circle water"><p className="small">water</p></div>
                </div>
            </div>
        )
    }
}

export default Types;