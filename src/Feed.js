import React, { Component } from 'react';
import {News} from "./News";
export class Feed extends Component {
    constructor () {
        super();
        this.state =  {data : [{defaultValue:'bla'}]};
    }

    getData() {
        const pageSize = 20;
        let prom =  fetch(`https://newsapi.org/v2/top-headlines?q=1&pageSize=${pageSize}&apiKey=060a6d0087fb45feabc945d8e95dc465`)
            .then(before => before.json())

            .then(res => {console.log(res); this.setState({data: res.articles})}).catch((e)=>console.log(e));


    }
    componentDidMount(){
        this.getData();
    }


    render() {
        let i=0;
        let  listOfobj =this.state.data.map(item => (<News key={i++} title={item.title}
                                                    description={item.description}
                                                    link={item.url}
                                                           image={item.urlToImage}
                                                           date ={item.publishedAt}
        />));



        return (
            <div>
                {listOfobj}
            </div>
        );
    }

}