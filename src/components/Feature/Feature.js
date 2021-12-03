import fatureIcon01 from "../../assets/01.png"
import fatureIcon02 from "../../assets/02.png"
import fatureIcon03 from "../../assets/03.png"

import React from 'react';

  class Feature extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        // recupero i dati dell' API 2 e li inserisco nello stato 

        fetch('https://api.npoint.io/b1ee4202a9250841186d')
        .then(response => response.json())
        .then((jsonData) => {
        
        // console.log(jsonData)   
        
        this.setState({data: jsonData}); 
        })
        .catch((error) => {
            console.error(error)
        })
    }

    render() {
        const data = Array.from(this.state.data); 
        return (
            <div className="feature">
                <div className="sectionHeading">
                    <div className="sectionTitle">Tailor-made features</div>
                    <div className="sectionDescription">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</div>
                </div>
                <div className="featureList">
                    <div className="row">
                    {/* Eseguo il metodo Map per visualizzare gli oggetti all'interno dell'Array limitando la visualizzazione a 3 Fature Faccio inoltre un controllo per vislizzare l'icona corretta*/}
                            {data.map(function(data, index){
                                
                                let fatureIcon = ""

                                if(index === 0 || index === 4){
                                    fatureIcon = fatureIcon01
                                }
                                if(index === 1 || index === 5){
                                    fatureIcon = fatureIcon02
                                }
                                if(index === 2 || index === 3){
                                    fatureIcon = fatureIcon03
                                }
                                
                            return (
                                <div className="blocco" key={index}>
                                    <div className="fatureIcon"><img src={fatureIcon} alt="" /></div>
                                    <div className="details">
                                        <div className="headline">{data.title}</div>
                                        <div className="description">{data.description}</div>
                                        </div>
                                
                                </div>)
                            })}
                    </div>
            </div>
        </div>
        )
    }
}

export default Feature;


