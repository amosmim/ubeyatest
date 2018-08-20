import React, { Component } from 'react';
import {News} from "./News";
import more from './more.png';


const Categories = ['business', 'entertainment', 'general' ,'health', 'science' ,'sports', 'technology'];

export class Feed extends Component {
    constructor () {
        super();
        this.state =  {data : [], page:1, filter:'1'};

        this.getData = this.getData.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.deleteAndGetNew = this.deleteAndGetNew.bind(this);
    }

    getData() {
        const pageSize = 20;
        let url=`https://newsapi.org/v2/top-headlines?page=${this.state.page}&q=${this.state.filter}&pageSize=${pageSize}&apiKey=060a6d0087fb45feabc945d8e95dc465`;
        if (this.state.category) {
            url = url + "&"+this.state.category;
        }
        fetch(url)
            .then(before => before.json())

            .then(res => {console.log(res); this.setState({data: this.state.data.concat(res.articles), page: this.state.page + 1})}).catch((e)=>console.log(e));


    }
    componentDidMount(){
        this.getData();
    }

    changeCategory (category) {
        console.log(category.target.value);
        this.setState({category:category.target.value, data:[], page:1});
        this.getData();

    }

    changeFilter (e) {
        this.setState({filter:e.target.value});

    }

    deleteAndGetNew() {
        this.setState({data:[], page:1});
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
                <div className='row'>
                    <h2>Category</h2>
                    <select onChange={this.changeCategory} value={this.state.category? this.state.category : ""}>
                        <option key={i++} value={""}>-----</option>
                        {Categories.map(item=>(<option key={i++} value={item}>{item}</option> ))}
                    </select>
                    <h2>filter by</h2>
                    <input type='text' onChange={this.changeFilter}/>
                    <button onClick={this.deleteAndGetNew}>Go</button>

                </div>
            <div className='News-box'>

                {listOfobj}

                <img src={more} onClick={this.getData}/>

            </div>
            </div>
        );
    }

}